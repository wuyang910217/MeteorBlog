import postsSchema from './posts/schema.js';
import tagsSchema from './tags/schema.js';
import usersSchema from './users/schema.js';
import categoriesSchema from './categories/schema.js';
import notificationsSchema from './notifications/schema.js';
import commentsSchema from './comments/schema.js';
import notesSchema from './notes/schema.js';
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
    tag(name: String!): Tag,
    categories: [Category],
    category(name: String!): Category,
    notifications: [Notification],
    comments: [Comment],
    notes: [Note],
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
  ...categoriesSchema,
  ...notesSchema,
  ...notificationsSchema,
  ...commentsSchema,
  ...testsSchema,
];

export default rootSchema;
