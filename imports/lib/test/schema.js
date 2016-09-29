const schema = [`
  type PostTest {
    _id: String!
    authorName: String
    title: String
    summary: String
    content: String
    tags: String
    postUrl: String
    isPublic: Boolean
    likeCount: Int
    createdAt: Float
    updatedAt: Float
  }
`];

export default schema;

