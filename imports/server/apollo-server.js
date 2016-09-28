import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import mainSchema from '/imports/lib/schema.js';
import resolvers from '/imports/lib/resolvers.js';

const schema = makeExecutableSchema({
  typeDefs: mainSchema,
  resolvers,
});

createApolloServer({
  graphiql: true,
  pretty: true,
  schema,
});
