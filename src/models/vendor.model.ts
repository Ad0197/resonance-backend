import { Field, ObjectType } from 'type-graphql'
import Attachment from './attachmebt.model'
import { Model } from './model'

@ObjectType()
export class Vendor implements Model {
  static talbeName: String = 'Vendors';
  @Field(type => [String])
  furniture: string[];

  @Field()
  catalogLink: string;

  @Field({ nullable: true })
  shippingDetails?: Attachment;

  @Field()
  name: string;

  @Field(type => [String])
  salesContact: string[];

  @Field()
  logo: Attachment;

  @Field()
  notes: string;

  @Field({ nullable: true })
  vendorPhoneNumber?: string;

  @Field({ nullable: true })
  closestShowroomAddress?: string;

  static mapFromRecordToVendor = (record: any): Vendor => ({
    furniture: record.Furniture,
    catalogLink: record['Catalog Link'],
    name: record.Name,
    salesContact: record['Sales Contact'],
    logo: record.Logo,
    notes: record.Notes,
    vendorPhoneNumber: record['Vendor Phone Number'],
    closestShowroomAddress: record['Closest Showroom Address']
  })
}
