import Furniture from '../models/furniture.model'
import Service from './service'

export default class FurnitureService extends Service<Furniture> {
  constructor (connection: Function) {
    super(connection, Furniture)
  }

  findByName = async (name: String): Promise<Furniture[]> => {
    return await this.table.select({ filterByFormula: `or( find(UPPER("${name}"), upper(Name)), find(UPPER("${name}"), upper(Type)), find(upper("${name}", upper(Vendor))))` }).all().then((this.mapResponseArray))
  }

  findByType = async (type: String): Promise<Furniture[]> => {
    return await this.table.select({ filterByFormula: `if( find(upper("${type}"), upper(Type) ), true(), false() )` }).all().then((this.mapResponseArray))
  }
}
