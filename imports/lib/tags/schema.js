const schema = [`
  type Tag {
    _id: String
    name: String
    postIdArray: [PostList]
    createdAt: Float
    updatedAt: Float
  }
`];

export default schema;
