import User from '../models/users.model'
import Service from './service'

export default class UserService extends Service<User> {
  constructor (connection: Function) {
    super(connection, User)
  }

  findByEmail = (email: string): Promise<User> => this.table.select({
    filterByFormula: `IF("${email}" = key, TRUE(), FALSE())`
  }).all().then((records) => {
    return this.mapResponse(records)[0]
  })
}
