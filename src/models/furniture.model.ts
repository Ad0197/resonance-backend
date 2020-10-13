import Airtable from 'airtable'
import { Model } from './model'

export default class Furniture implements Model {
  static tableName: String = 'Furniture';
  id: string;
  designer?: string[];
  unitsInStore: number;
  materialsAndFinishes: string[];
  size: string;
  unitCost: number;
  settings: string[];
  vendor: any[];
  notes?: string;
  link: string;
  name: string;
  type: string;
  picture: Airtable.Attachment[];
  description: string;
  totalUnitsSold: number;
  grossSales: number;
  recordID: string;
  inStock?: boolean;
  orders?: string[];
  schematic?: Airtable.Attachment[];

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
