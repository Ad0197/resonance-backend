import { Field, ObjectType } from 'type-graphql'
import Attachment from './attachmebt.model'
import { Model } from './model'
import { Vendor } from './vendor.model'

@ObjectType()
export default class Furniture implements Model {
  static tableName: String = 'Furniture';
  @Field(type => String)
  id: String;

  @Field(type => [String], { nullable: true })
  designer?: String[];

  @Field()
  unitsInStore: Number;

  @Field(type => [String])
  materialsAndFinishes: String[];

  @Field()
  size: string;

  @Field()
  unitCost: number;

  @Field(type => [String])
  settings: string[];

  @Field(type => [Vendor])
  vendor: Vendor[];

  @Field({ nullable: true })
  notes?: string;

  @Field()
  link: string;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field(type => [Attachment])
  picture: Attachment[];

  @Field()
  description: string;

  @Field()
  totalUnitsSold: number;

  @Field()
  grossSales: number;

  @Field()
  recordID: string;

  @Field({ nullable: true })
  inStock?: boolean;

  @Field(type => [String], { nullable: true })
  orders?: string[];

  @Field(type => [Attachment], { nullable: true })
  schematic?: Attachment[];

  static mapFromFieldToInstance = (record: any): Furniture => {
    return {
      id: record.id,
      designer: record.Designer,
      unitsInStore: record['Units In Store'],
      materialsAndFinishes: record['Materials and Finishes'],
      size: record['Size (WxLxH)'],
      unitCost: record['Unit Cost'],
      settings: record.Settings,
      vendor: record.Vendor,
      notes: record.Notes,
      link: record?.Link,
      name: record.Name,
      type: record.Type,
      picture: record.Picture,
      description: record.Description,
      totalUnitsSold: record['Total Units Sold'],
      grossSales: record['Gross Sales'],
      recordID: record.RecordID,
      inStock: record['In Stock'] || undefined,
      orders: record.Orders,
      schematic: record?.Schematic
    }
  }

  static mapFromInstanceToField = (object: Furniture): any => ({
    Designer: object?.designer,
    'Units In Store': object.unitsInStore,
    'Materials and Finishes': object.materialsAndFinishes,
    'Size (WxLxH)': object.size,
    'Unit Cost': object.unitCost,
    Settings: object.settings,
    Vendor: object.vendor,
    Notes: object?.notes,
    Link: object.link,
    Name: object.name,
    Type: object.type,
    Picture: object.picture,
    Description: object.description,
    'Total Units Sold': object.totalUnitsSold,
    'Gross Sales': object.grossSales,
    RecordID: object.recordID,
    'In Stock': object?.inStock,
    Orders: object?.orders,
    Schematic: object?.schematic
  })
}
