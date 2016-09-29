import { Tags } from './tags';

const tagsResolvers = {
  Query: {
    async tags(root, args, context) {
      return await Tags.find({}).fetch();
    },
  },
  Mutation: {
  },
};

export default tagsResolvers;
