const schema = [`
  type Tag {
    _id: String
    postIdArray: [PostList]
    authorId: String
    authorName: String
    tagName: String
    tagCount: Int
    createdAt: Float
    updatedAt: Float
  }
`];

export default schema;
