const schema = [`
  type Notification {
    _id: String
    authorId: String
    postId: String
    postTitle: String
    commentId: String
    commenterName: String
    read: Boorean
    createdAt: Float
  }
`];

export default schema;
