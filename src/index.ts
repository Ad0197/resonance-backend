import dotenv from 'dotenv'
import 'reflect-metadata'
import express, { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import HelloResolver from './resolvers/hello.resolver'
import FurnitureResolver from './resolvers/furniture/furniture.resolver'
import ClientUserResolver from './resolvers/client-user/client-user.resolver'
dotenv.config();

(
  async () => {
    const app: Application = express()
    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [HelloResolver, FurnitureResolver, ClientUserResolver]
      }),
      context: ({ req, res }) => ({ req, res })
    })

    apolloServer.applyMiddleware({ app, cors: true })

    app.listen(process.env.PORT || 5000, async () => {
      console.log('Server is listining in port 5000')
    })
  }
)()
