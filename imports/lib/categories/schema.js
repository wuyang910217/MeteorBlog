const schema = [`
  type Category {
    _id: String
    name: String
    authorId: String
    authorName: String
    postIdArray: [PostList]
    createdAt: Float
    updatedAt: Float
  }
`];

export default schema;
