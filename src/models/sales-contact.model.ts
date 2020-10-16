import { Field, ObjectType } from 'type-graphql'
import Attachment from './attachment.model'
import { Model } from './model'

@ObjectType()
export default class SalesContact implements Model {
    static tableName: string = 'Vendor Contacts';
    @Field()
    name: string;

    @Field(type => [String])
    vendors: string[];

    @Field(type => [Attachment])
    photo: Attachment[];

    @Field()
    phoneNumber: string;

    @Field()
    email: string;

    static mapFromFieldToInstance = (record: any): SalesContact => ({
      name: record.Name,
      vendors: record.Vendors,
      photo: record.Photo,
      phoneNumber: record['Pohone Number'],
      email: record.Email
    })
}
