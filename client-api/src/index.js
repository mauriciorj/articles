require("dotenv").config();
import cors from "cors";
import express from "express";
import consola from "consola";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import { ApolloServer } from "apollo-server-express";
import postgresConn from "./postgresConn";
import session from "express-session";
import cookieParser from "cookie-parser";
import http from "http";

//! initialize sequelize with session store
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//Initialize Express
const app = express();
app.use(cookieParser());
app.use(
  session({
    name: process.env.SESSION_NAME,
    secret: process.env.APP_SECRET,
    store: new SequelizeStore({
      db: postgresConn.sequelize,
    }),
    resave: false, // we support the touch method so per that express-session docs this should be set to false
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV == "production",
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: false,
    },
  })
);

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

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
        session: req.session,
        me: req.session.user,
        secret: process.env.APP_SECRET,
      };
    }
  },
});
server.applyMiddleware({ app, path: "/graphql", cors: false });

const httpServer = http.createServer(app);

//Start Application
const startApp = async () => {
  try {
    await postgresConn.sequelize.authenticate();
    consola.success({ message: 'Connection has been established successfully.', badge: true });

    await postgresConn.sequelize.sync({ force: false });
    consola.success({ message: 'All models were synchronized successfully.', badge: true });

    httpServer.listen(process.env.PORT, () =>
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
