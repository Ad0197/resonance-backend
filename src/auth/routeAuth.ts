import { verify } from 'jsonwebtoken'
import { Request, Response, Router } from 'express'
import UserService from '../services/user.services'
import { getConnection } from '../services/service'
import { createAccessToken, createRefreshToken } from './auth'

const router = Router()

router.post('/refresh_token', async (req: Request, res: Response) => {
  const refreshToken = req.cookies.jid
  if (!refreshToken) res.send({ ok: false, accessToken: '' })
  let payload: any = null
  try {
    payload = verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!)
  } catch (error) {
    res.send({ ok: false, accessToken: '' })
  }

  const userService = new UserService(getConnection())
  const user = await userService.findById(payload.id)
  const newRefreshToken = createRefreshToken(user)
  sendRefereshToken(res, newRefreshToken)
  return res.send({ ok: true, accessToken: createAccessToken(user) })
})

export const sendRefereshToken = (res: Response, refreshToken: string) => {
  res.cookie(
    'jid', refreshToken,
    {
      httpOnly: true,
      path: '/refresh_token'
    }
  )
}
