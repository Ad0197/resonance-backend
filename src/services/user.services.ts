import User from '../models/users.model'
import Service from './service'

export default class UserService extends Service<User> {
  constructor (connection: Function) {
    super(connection, User)
  }
}
