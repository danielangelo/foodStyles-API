const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("../graphql/schemas");
const resolvers = require("../graphql/resolvers");
const context = require("../graphql/context");

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: true,
  playground: {
    settings: {
      "schema.polling.enable": false,
    },
  },
});

module.exports = apolloServer;
