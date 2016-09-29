import { Tags } from './tags';

const tagsResolvers = {
  Query: {
    async tags(root, args, context) {
      return await Tags.find({}).fetch();
    },
    async tag(root, args, context) {
      return await Tags.findOne({ name: args.name });
    },
  },
  Mutation: {
  },
};

export default tagsResolvers;
