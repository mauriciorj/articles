import { gql } from "apollo-server-express";

export default gql`
  scalar Date

  type User {
    id: ID!
    uuid: String!
    name: String!
    email: String!
    password: String
    deleteAt: Date
    createdAt: Date
    updatedAt: Date
  }

  extend type Query {
    me: User
    users: [User!]
    isLoggedIn: Boolean!
  }

  extend type Mutation {
    createUser(
      uuid: String!
      name: String!
      email: String!
      password: String!
    ): User!
    login(name: String!, password: String!): User!
    logout: User!
  }
`;
