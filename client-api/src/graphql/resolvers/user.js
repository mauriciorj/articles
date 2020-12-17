import { UserInputError } from "apollo-server";
import { Op } from "sequelize";
import { isAuthenticated, isSessionAuthenticated } from "./authorization";
import { combineResolvers } from "graphql-resolvers";

export default {
  Query: {
    // ! This query is for the logged in user
    isLoggedIn: async (root, args, { session }, info) => {
      return isSessionAuthenticated(session);
    },
    me: combineResolvers(
      isAuthenticated,
      async (root, args, { postgresConn, me }, info) => {
        const user = await postgresConn.user.findByPk(me.id);
        return user;
      }
    ),
    // ! This query grabs all the users
    users: combineResolvers(
      isAuthenticated,
      async (root, args, { postgresConn }, info) => {
        const users = await postgresConn.user.findAll();
        if (!users) {
          throw new Error("No users found");
        }
        return users;
      }
    ),
  },
  Mutation: {
    createUser: async (root, { uuid, name, email, password }, { postgresConn, session }) => {
      const userExists = await postgresConn.user.findOne({
        where: {
          [Op.or]: [{ email }, { name }],
        },
      });
      if (userExists) {
        throw new Error("A user with this email or username already exists");
      }
      const user = await postgresConn.user.create({
        uuid, name, email, password,
      });

      session.user = {
        id: user.dataValues.id,
        name: user.dataValues.name,
      };

      return user;
    },

    login: async (root, { name, password }, { postgresConn, session }, info) => {
      const user = await postgresConn.user.findOne({
        where: { name },
      });
      if (!user) {
        throw new UserInputError(`User with ${name} does not exist`);
      }

      const isValid = await user.validatePassword(password);
      if (!isValid) {
        throw new UserInputError('Password is invalid');
      }

      session.user = {
        id: user.dataValues.id,
        name: user.dataValues.name,
      };

      return user;
    },
    logout: async (root, args, { session, res }, info) => {
      let loggedOutUser = session.user;
      await session.destroy();
      res.clearCookie(process.env.SESSION_NAME);
      return loggedOutUser;
    },
  },
};
