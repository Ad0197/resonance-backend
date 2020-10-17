import { verify } from 'jsonwebtoken'
import { Request, Response, Router } from 'express'
import UserService from '../services/user.services'
import { getConnection } from '../services/service'
import { createAccessToken, createRefreshToken } from './auth'

const AuthRoute = Router()

AuthRoute.post('/refresh_token', async (req: Request, res: Response) => {
  const refreshToken = req.cookies.jid
  if (refreshToken === undefined) return res.status(401).send({ ok: false, accessToken: '' })
  let payload: any = null
  try {
    payload = verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!)

    const userService = new UserService(getConnection())
    const user = await userService.findByEmail(payload.userId)
    const newRefreshToken = createRefreshToken(user)
    const { email, firstName, lastName, id, username } = user
    sendRefereshToken(res, newRefreshToken)
    return res.send({
      ok: true,
      accessToken: createAccessToken(user),
      user: {
        email, firstName, lastName, id, username
      }
    })
  } catch (error) {
    return res.send({ ok: false, accessToken: '' })
  }
})

export const sendRefereshToken = (res: Response, refreshToken: string) => {
  res.cookie(
    'jid', refreshToken,
    {
      httpOnly: true,
      path: '/refresh_token',
      domain: 'localhost'
    }
  )
}

export default AuthRoute
