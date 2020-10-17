import User from '../models/users.model'
import Service from './service'

export default class UserService extends Service<User> {
  constructor (connection: Function) {
    super(connection, User)
  }

  findByEmail = (email: string): Promise<User> => this.table.select({
    filterByFormula: `IF("${email}" = key, TRUE(), FALSE())`
  }).all().then((records) => {
    return this.mapResponseArray(records)[0]
  })

  findByUsername = (username: string): Promise<User> => this.table.select({
    filterByFormula: `IF("${username}" = username, TRUE(), FALSE())`
  }).all().then((records) => this.mapResponseArray(records)[0])
}
