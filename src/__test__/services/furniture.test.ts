import Furniture from '../../models/furniture.model'
import 'reflect-metadata'
import FurnitureService from '../../services/furniture.service'
import { getConnection } from '../../services/service'
import dotenv from 'dotenv'
dotenv.config()

const service = new FurnitureService(getConnection())

describe('Furniture Services Test', () => {
  it('should get All the furniture from Airtable', async () => {
    const furniture: Furniture[] = (await service.getAllRecord())
    expect(furniture).toBeInstanceOf(Array)
    // expect(furniture[0].name).toBeTruthy()
  })
})
