import Airtable from 'airtable'

export interface Furniture {
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
}

export const mapFromFildsToFurniture = (record: any): Furniture => {
  return {
    designer: record.Designer,
    unitsInStore: record['Units In Store'],
    materialsAndFinishes: record['Materials and Finishes'],
    size: record['Size (WxLxH)'],
    unitCost: record['Unit Cost'],
    settings: record.Settings,
    vendor: record.Vendor,
    notes: record.Notes,
    link: record.Link,
    name: record.Name,
    type: record.Type,
    picture: record.Picture,
    description: record.Description,
    totalUnitsSold: record['Total Units Sold'],
    grossSales: record['Gross Sales'],
    recordID: record.RecordID,
    inStock: record['In Stock'],
    orders: record.Orders,
    schematic: record.Schematic
  }
}
