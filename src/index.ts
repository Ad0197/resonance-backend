import dotenv from 'dotenv'
import express, { Application, Response, Request, NextFunction } from 'express'
import { FurnitureService } from './services/furniture.service'
dotenv.config()

const app: Application = express()

const add: Function = (a: number, b: number): number => a + b

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log(add(5, 5))
  res.send('hola')
})

app.listen(5000, async () => {
  console.log('Server is listining in port 5000')
  const service = new FurnitureService()
  console.log(await service.getAllFurniture())
})
