import { Furniture, mapFromFildsToFurniture } from '../models/furniture.model'
import { Service } from './airtable'

export class FurnitureService extends Service {
  constructor () {
    super('Furniture')
  }

    getAllFurniture = async (): Promise<Furniture[]> => (await this.getAllRecord()).map((record: any) => mapFromFildsToFurniture(record))
}
