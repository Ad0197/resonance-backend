import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import Client from '../../models/client.model'
import User from '../../models/users.model'
import ClientService from '../../services/client.services'
import { getConnection } from '../../services/service'
import UserService from '../../services/user.services'
import Bcrypt from 'bcrypt'
import { LoginResponse } from './client-user.types'
import { createAccessToken, createRefreshToken, MyContext } from '../../auth/auth'
import { sendRefereshToken } from '../../auth/routeAuth'

@Resolver()
export default class ClientUserResolver {
  @Mutation(() => Boolean)
  async createClientUser (@Arg('user') user: User) {
    try {
      const connection = getConnection()
      user.password = await Bcrypt.hash(user.password, parseInt(process.env.SALT || '10'))
      const userService = new UserService(connection)
      const clientService = new ClientService(connection)
      const createdUser = await userService.create(user)
      const client = new Client()
      client.users = createdUser.getId()
      client.name = `${user.firstName} ${user.lastName}`
      await clientService.create(client)
      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  @Query(() => LoginResponse)
  async login (@Arg('email') email: string, @Arg('password') password: string, @Ctx() ctx: MyContext): Promise<LoginResponse> {
    const userService = new UserService(getConnection())
    const user = await userService.findByEmail(email)
    if (!user) throw new Error('Bad email')
    const accessToken = createAccessToken(user)
    sendRefereshToken(ctx.res, createRefreshToken(user))
    return {
      user,
      accessToken
    }
  }
}
