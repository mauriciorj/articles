import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: ID
    name: String!
    email: String!
  }

  extend type Query {
    users: [User!]
  }

  extend type Mutation {
    createUser(
      name: String!
      email: String!
    ): User!
  }
`;
