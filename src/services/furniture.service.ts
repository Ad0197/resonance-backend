import Furniture from '../models/furniture.model'
import Service from './service'

export default class FurnitureService extends Service<Furniture> {
  constructor (connection: Function) {
    super(connection, Furniture)
  }
}
