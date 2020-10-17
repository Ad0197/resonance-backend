import { Response, Request } from 'express'
import { verify, sign } from 'jsonwebtoken'
import { MiddlewareFn } from 'type-graphql/dist/interfaces/Middleware'

import User from '../models/users.model'

export interface MyContext {
    req: Request;
    res: Response;
    payload?: {
        userId: String;
    }
}

const createTokenFn = (secret: string, expiresIn: string) => (user: User) => {
  return sign({ userId: user.id }, secret, {
    expiresIn
  })
}

export const createAccessToken = createTokenFn(process.env.ACCESS_TOKEN_SECRET!, '15m')

export const createRefreshToken = createTokenFn(process.env.REFRESH_TOKEN_SECRET!, '7d')

export const isAuth: MiddlewareFn<MyContext> = ({ context: { req, payload } }, next) => {
  const authorization = req.headers.authorization

  if (!authorization) throw Error('not authenticated')

  try {
    const token = authorization.split(' ')[1]
    const payloadFromToken = verify(token, process.env.ACCESS_TOKEN_SECRET!)
    payload = payloadFromToken as any
  } catch (error) {
    throw new Error('not aunthenticated')
  }

  return next()
}
