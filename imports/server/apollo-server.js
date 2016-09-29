import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import rootSchema from '../lib/schema.js';
import resolvers from '../lib/resolvers.js';

import '../lib/faker.js';

const schema = makeExecutableSchema({
  typeDefs: rootSchema,
  resolvers,
});

createApolloServer({
  graphiql: true,
  pretty: true,
  schema,
});
