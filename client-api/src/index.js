import express from 'express';
import consola from 'consola';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import { ApolloServer } from 'apollo-server-express';

//Import configuration
const {
  PORT,
  NODE_ENV,
  APP_SECRET,
  APP_REFRESH_SECRET,
} = require("./config/index");

//Initialize App
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: IN_PROD
    ? false
    : { settings: { "request.credentials": "include" } },
});
server.applyMiddleware({ app });

//Start Application
app.listen({ port: PORT }, () =>
  consola.success({message: `🚀 Server ready at http://localhost:4000${server.graphqlPath}`, badge: true})
);
