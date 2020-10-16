import Client from '../models/client.model'
import Service from './service'

export default class ClientService extends Service<Client> {
  constructor (connection: Function) {
    super(connection, Client)
  }
}
