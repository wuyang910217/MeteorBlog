import postsSchema from './posts/schema';
import tagsSchema from './tags/schema';

const mainSchema = [`
  type Query {
    posts: [Post],
    tags: [Tag],
  },
  type Mutation {
    insertPost(authorName: String!, title: String!): Post
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
];

export default rootSchema;
