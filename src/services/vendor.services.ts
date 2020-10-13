import { mapFromRecordToVendor, Vendor } from '../models/vendor.model'
import Service from './airtable'

export default class VendorService extends Service {
  constructor () {
    super('Vendors')
  }

    getAllRecord = async (): Promise<Vendor[]> => (await this.getAllRecord()).map(mapFromRecordToVendor);
}
