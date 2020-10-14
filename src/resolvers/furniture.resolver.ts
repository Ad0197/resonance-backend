import { Arg, Query, Resolver } from 'type-graphql'
import Furniture from '../models/furniture.model'
import FurnitureService from '../services/furniture.service'
import { getConnection } from '../services/service'

@Resolver()
export default class FurnitureResolver {
  service = new FurnitureService(getConnection())
  @Query(() => [Furniture])
  async getAllFurniture () {
    return await this.service.getAllRecord()
  }

  @Query(() => [Furniture])
  async findFurnitureByName (@Arg('name') name: String) {
    return await this.service.findByName(name)
  }
}
