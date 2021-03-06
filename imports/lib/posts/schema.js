const schema = [`
  type PostList {
    postId: String
    authorName: String
    postTitle: String
    postUrl: String
  },
  type Post {
    _id: String!
    authorName: String
    authorId: String
    title: String
    summary: String
    content: String
    postUrl: String
    isPublic: Boolean
    likeCount: Int
    tags: Tag

    updatedAt: Float
    createdAt: Float
  }
`];

export default schema;

    // category: Category
    // comments: Comment
