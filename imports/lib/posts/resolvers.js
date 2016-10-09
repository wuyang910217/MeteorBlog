import { Posts } from './posts.js';

const postsResolvers = {
  Query: {
    async posts(root, args, context) {
      return await Posts.find({}).fetch();
    },
    async post(root, args, context) {
      return Posts.findOne({ _id: args.id });
    },
  },
  Post: {
    tags: ({ tags }) => tags,
    category: ({ category }) => category,
    comments: ({ comments }) => comments,
  },
  Mutation: {
    async insertPost(root, args, context) {
      const createdAt = Date.now();
      const postId = Posts.insert({
        authorName: args.authorName,
        title: args.title,
        createdAt,
      });

      return {
        _id: postId,
        authorName: args.authorName,
        title: args.title,
        createdAt,
      };
    },
  },
};

export default postsResolvers;
