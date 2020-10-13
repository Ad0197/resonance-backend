import { Query, Resolver } from 'type-graphql'
import Furniture from '../models/furniture.model'
import FurnitureService from '../services/furniture.service'
import { getConnection } from '../services/service'

@Resolver()
export default class FurnitureResolver {
  @Query(() => [Furniture])
  async getAllFurniture () {
    const service = new FurnitureService(getConnection())
    return await service.getAllRecord()
  }
}
