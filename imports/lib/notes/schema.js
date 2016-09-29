const schema = [`
  type Note {
    _id: String!
    authorName: String
    authorId: String
    title: String
    content: String
    isPublic: Boolean
    updatedAt: Float
    createdAt: Float
  }
`];

export default schema;
