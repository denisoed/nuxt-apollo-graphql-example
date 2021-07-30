const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: Int
    name: String
    age: Int
  }

  type Query {
    users(age: Int): [User]
  }
`;

module.exports = typeDefs;
