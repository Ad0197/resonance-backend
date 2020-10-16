import { Arg, Mutation, Resolver } from 'type-graphql'
import Client from '../../models/client.model'
import User from '../../models/users.model'
import ClientService from '../../services/client.services'
import { getConnection } from '../../services/service'
import UserService from '../../services/user.services'
import Bcrypt from 'bcrypt'

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
}
