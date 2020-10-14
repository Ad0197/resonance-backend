import Furniture from '../models/furniture.model'
import Service from './service'

export default class FurnitureService extends Service<Furniture> {
  constructor (connection: Function) {
    super(connection, Furniture)
  }

  findByName = async (name: String): Promise<Furniture[]> => {
    return await this.table.select({ filterByFormula: `if( find(UPPER("${name}"), upper(Name)), find(UPPER("${name}"), upper(Type)), find(upper("${name}", upper(Vendor))))` }).all().then((this.mapResponse))
  }
}
