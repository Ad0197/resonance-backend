import { Arg, Query, Resolver } from 'type-graphql'
import { getConnection } from '../../services/service'
import Furniture from '../../models/furniture.model'
import FurnitureService from '../../services/furniture.service'

@Resolver()
export default class FurnitureResolver {
  service = new FurnitureService(getConnection())
  @Query(() => [Furniture])
  async getAllFurniture () {
    return await this.service.getAllRecord()
  }

  @Query(returns => [Furniture])
  async findFurnitureByName (@Arg('name') name: String) {
    return await this.service.findByName(name)
  }

  @Query(returns => Furniture)
  async findFurnitureById (@Arg('id') id: string) {
    return await this.service.findById(id)
  }

  @Query(returns => [Furniture])
  async findFurnitureByCategory (@Arg('category') category: string) {
    return await this.service.findByType(category)
  }
}
