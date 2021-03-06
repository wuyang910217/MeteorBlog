import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import rootSchema from '../lib/schema.js';
import resolvers from '../lib/resolvers.js';

const schema = makeExecutableSchema({
  typeDefs: rootSchema,
  resolvers,
  resolverValidationOptions: {
    requireResolverForNonScalar: false,
  },
});

createApolloServer({
  graphiql: true,
  pretty: true,
  schema,
});
