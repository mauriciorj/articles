import { UserInputError } from "apollo-server";
import { Op } from "sequelize";
import { isAuthenticated, isSessionAuthenticated } from "./authorization";
import { combineResolvers } from "graphql-resolvers";

export default {
  Query: {
    articles: async (root, args, { postgresConn }, info) => {
      const articles = await postgresConn.article.findAll();
      if (!articles) {
        throw new Error("No articles found");
      }
      return articles;
    },
    article: async (root, args, { postgresConn }, info) => {
      const articles = await postgresConn.article.findOne({
        where: {
          [Op.or]: [
            { ...args },
          ],
        },
      });
      if (!articles) {
        throw new Error("No article found");
      }
      return articles;
    },
  },

  Mutation: {
    createArticle: combineResolvers(
      isAuthenticated,
      async (root, { args }, { postgresConn, session }) => {
        const { id, uui, source, title, link } = args;
        const articleExists = await postgresConn.article.findOne({
          where: {
            [Op.or]: [{ id }, { uui }, { source }, { title }, { link }],
          },
        });
        if (articleExists) {
          throw new Error("This article already exist");
        }
        const article = await postgresConn.article.create({
          ...args,
        });

        session.user = {
          uuid: user.dataValues.uuid,
        };

        return article;
      }
    ),
  },
};
