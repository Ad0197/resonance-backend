import Airtable from 'airtable'

export interface Client {
    billingAddress?: string;
    users?: string;
    name: string;
    clientOrders?: string[];
    mapCache?: string;
    photosOfClientSpace?: Airtable.Attachment[];
}

export const mapFromRecordToClient = (record: any): Client => ({
  billingAddress: record['Billing Address'],
  users: record.Users,
  name: record.Name,
  clientOrders: record['Client Orders'],
  mapCache: record['Map Cache'],
  photosOfClientSpace: record['Photos Of Client Space']
})
