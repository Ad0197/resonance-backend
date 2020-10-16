import { Field, ObjectType } from 'type-graphql'
import Attachment from './attachment.model'
import { Model } from './model'

@ObjectType()
export default class Client implements Model {
  static tableName: string = 'Clients';
  @Field({ nullable: true })
  billingAddress?: string;

  @Field({ nullable: true })
  users?: string;

  @Field()
  name: string;

  @Field(type => [String], { nullable: true })
  clientOrders?: string[];

  @Field({ nullable: true })
  mapCache?: string;

  @Field(type => [Attachment], { nullable: true })
  photosOfClientSpace?: Attachment[];

  static mapFromFieldToInstance = (record: any) => ({
    billingAddress: record['Billing Address'],
    users: record.Users,
    name: record.Name,
    clientOrders: record['Client Orders'],
    mapCache: record['Map Cache'],
    photosOfClientSpace: record['Photos Of Client Space']
  })

  static mapFromInstanceToField = (client: Client) => ({
    'Billing Address': client.billingAddress,
    Users: client.users,
    Name: client.name,
    'Client Orders': client.clientOrders,
    'Map Cache': client.mapCache,
    'Photo Of client Space': client.photosOfClientSpace
  })
}
