import { sign } from 'jsonwebtoken'
import User from '../models/users.model'

const createTokenFn = (secret: string, expiresIn: string) => (user: User) => sign(user.id, secret, {
  expiresIn
})

export const createAccessToken = createTokenFn(process.env.ACCESS_TOKEN_SECRET!, '15m')

export const createRefreshToken = createTokenFn(process.env.REFRESH_TOKEN_SECRET!, '7d')
