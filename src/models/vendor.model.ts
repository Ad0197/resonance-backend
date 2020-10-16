import { Field, ObjectType } from 'type-graphql'
import SalesContactService from '../services/sales-contact.services'
import { getConnection } from '../services/service'
import Attachment from './attachment.model'
import { Model } from './model'
import SalesContact from './sales-contact.model'

@ObjectType()
export class Vendor implements Model {
  static tableName: String = 'Vendors';

  @Field(type => [String])
  furniture: string[];

  @Field()
  catalogLink: string;

  @Field({ nullable: true })
  shippingDetails?: Attachment;

  @Field({ nullable: true })
  name: string;

  @Field(type => [SalesContact])
  salesContact: SalesContact[];

  @Field(() => [Attachment], { nullable: true })
  logo: Attachment[];

  @Field()
  notes: string;

  @Field({ nullable: true })
  vendorPhoneNumber?: string;

  @Field({ nullable: true })
  closestShowroomAddress?: string;

  static mapFromFieldToInstance = async (record: any): Promise<Vendor> => {
    const connection = getConnection()
    const salesContactService = new SalesContactService(connection)
    return {
      furniture: record.Furniture,
      catalogLink: record['Catalog Link'],
      name: record.Name,
      salesContact: await Promise.all(record['Sales Contact'].map((id: string) => salesContactService.findById(id))),
      logo: record.Logo,
      notes: record.Notes,
      shippingDetails: record['Shipping Details'],
      vendorPhoneNumber: record['Vendor Phone Number'],
      closestShowroomAddress: record['Closest Showroom Address']
    }
  }
}
