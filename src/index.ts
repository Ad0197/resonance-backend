import 'dotenv/config'
import 'reflect-metadata'
import express, { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import HelloResolver from './resolvers/hello.resolver'
import FurnitureResolver from './resolvers/furniture/furniture.resolver'
import ClientUserResolver from './resolvers/client-user/client-user.resolver'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import AuthRoute from './auth/routeAuth'

(
  async () => {
    const app: Application = express()
    app.use(cookieParser())
    app.use(cors({
      origin: 'http://localhost:3000',
      credentials: true
    }))
    app.use('/', AuthRoute)
    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [HelloResolver, FurnitureResolver, ClientUserResolver]
      }),
      context: ({ req, res }) => ({ req, res })
    })

    apolloServer.applyMiddleware({ app, cors: false })

    app.listen(process.env.PORT || 5000, async () => {
      console.log('Server is listining in port 5000')
    })
  }
)()
