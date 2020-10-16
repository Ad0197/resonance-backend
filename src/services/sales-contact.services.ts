import SalesContact from '../models/sales-contact.model'
import Service from './service'

export default class SalesContactService extends Service<SalesContact> {
  constructor (connection: Function) {
    super(connection, SalesContact)
  }
}
