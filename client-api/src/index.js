require("dotenv").config();
import cors from "cors";
import express from "express";
import consola from "consola";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import { ApolloServer } from "apollo-server-express";
import postgresConn from "./postgresConn";
import session from "express-session";

//! initialize sequelize with session store
const SequelizeStore = require("connect-session-sequelize")(session.Store);

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
  context: async ({ req, res, connection }) => {
    if (req) {
      return {
        postgresConn,
        res,
      };
    }
  },
});
server.applyMiddleware({ app, cors: false });

//Start Application
const startApp = async () => {
  try {
    await postgresConn.sequelize.authenticate();
    consola.success({ message: 'Connection has been established successfully.', badge: true });

    await postgresConn.sequelize.sync({ force: false });
    consola.success({ message: 'All models were synchronized successfully.', badge: true });

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
