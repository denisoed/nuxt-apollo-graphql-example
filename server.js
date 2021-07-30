const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');

const users = [
  {
    id: 1,
    name: 'Bob',
    age: 32,
  },
  {
    id: 2,
    name: 'Alice',
    age: 28,
  },
  {
    id: 3,
    name: 'Chuck',
    age: 28,
  },
];

async function startApolloServer() {
  // Construct a schema, using GraphQL schema language
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

  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      users: (_, params) => {
        if (params && params.age) return users.filter(user => user.age === params.age);
        return users;
      }
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  

  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));

  server.applyMiddleware({ app, cors: false });

  await new Promise(resolve => app.listen({ port: 4000 }, resolve));

  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer();
