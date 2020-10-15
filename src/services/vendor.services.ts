import { Vendor } from '../models/vendor.model'
import Service from './service'

export default class VendorService extends Service<Vendor> {
  constructor (connection: Function) {
    super(connection, Vendor)
  }
}
