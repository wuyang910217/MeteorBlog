const schema = [`
  type Reply {
    postId: String
    content: String
    replier: String
  },
  type Comment {
    _id: String!
    postId: String
    content: String
    commenter: String
    replies: [Reply]
    createdAt: Float
  }
`];

export default schema;
