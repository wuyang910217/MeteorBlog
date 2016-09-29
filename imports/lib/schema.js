import postsSchema from './posts/schema.js';
import tagsSchema from './tags/schema.js';
import usersSchema from './users/schema.js';
import testsSchema from './test/schema.js';

const mainSchema = [`
  type Query {
    postsTest: [PostTest],
    postTest(authorName: String!): PostTest,
    users: [User],
    user(id: String!): User,
    posts: [Post],
    post(id: String!): Post,
    tags: [Tag],
  },
  type Mutation {
    insertPost(authorName: String!, title: String!): Post
    insertPostTest(authorName: String!, title: String!): PostTest
  },
  schema {
    query: Query,
    mutation: Mutation,
  }
`];

const rootSchema = [
  ...mainSchema,
  ...postsSchema,
  ...tagsSchema,
  ...usersSchema,
  ...testsSchema,
];

export default rootSchema;
