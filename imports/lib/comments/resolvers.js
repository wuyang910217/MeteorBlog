import { Comments } from './comments.js';

const commentsResolvers = {
  Query: {
    async comments(root, args, context) {
      return await Comments.find({}).fetch();
    },
  },
  Comment: {
    replies: ({ replies }) => replies,
  },
  Mutation: {

  },
};

export default commentsResolvers;
