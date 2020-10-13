import Airtable from 'airtable'

export interface Vendor {
    furniture: string[];
    catalogLink: string;
    shippingDetails?: Airtable.Attachment;
    name: string;
    salesContact: string[];
    logo: Airtable.Attachment;
    notes: string;
    vendorPhoneNumber?: string;
    closestShowroomAddress?: string;
}

export const mapFromRecordToVendor = (record: any): Vendor => ({
  furniture: record.Furniture,
  catalogLink: record['Catalog Link'],
  name: record.Name,
  salesContact: record['Sales Contact'],
  logo: record.Logo,
  notes: record.Notes,
  vendorPhoneNumber: record['Vendor Phone Number'],
  closestShowroomAddress: record['Closest Showroom Address']
})
