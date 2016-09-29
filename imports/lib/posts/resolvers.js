import { Posts } from './posts';

const postsResolvers = {
  Query: {
    async posts(root, args, context) {
      return await Posts.find({}).fetch();
    },
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
