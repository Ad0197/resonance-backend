import { mapRecordToUser, User } from '../models/users.model'
import { Service } from './airtable'

export default class UserService extends Service {
  constructor () {
    super('Users')
  }

  getAllUser = async (): Promise<(User)[]> => {
    return (await this.getAllRecord()).map((record: any) => {
      return mapRecordToUser(record)
    })
  }
}
