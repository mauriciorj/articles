require("dotenv").config();
import cors from "cors";
import express from "express";
import consola from "consola";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import { ApolloServer } from "apollo-server-express";
import postgresConn from "./postgresConn";

//Import configuration
const {
  PORT,
  NODE_ENV,
  APP_SECRET,
  APP_REFRESH_SECRET,
} = require("./config/index");

//Initialize App
const app = express();
app.use(cors());

//Setting up the headers
app.disable("x-powered-by");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});
server.applyMiddleware({ app, cors: false });

//Start Application
const startApp = async () => {
  try {
    await postgresConn.connect();
    consola.success({ message: `Postgres connected`, badge: true });
    app.listen(process.env.PORT, () =>
      consola.success({
        message: `🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`,
        badge: true,
      })
    );
  } catch (error) {
    consola.error({
      message: `Unable to start the server \n${error.message}`,
      badge: true,
    });
  }
};

startApp();
