import { gql } from 'apollo-server-express';

export default gql`
    type Article {
        id: ID!
        uuid: String!
        source: String!
        title: String!
        link: String!
        filters: String
    }

    extend type Query {
        articles: [Article!]
        article (
            id: ID,
            uuid: String,
            source: String, 
            title: String, 
            link: String
            filters: String
        ): Article
    }

    extend type Mutation {
        createArticle(
            uuid: String!
            source: String!
            title: String!
            link: String!
            filters: String
        ): Article!
    }
`;