import { Categories } from './categories.js';

const categoriesResolvers = {
  Query: {
    async categories(root, args, context) {
      return await Categories.find({}).fetch();
    },
    async category(root, args, context) {
      return await Categories.findOne({ name: args.name });
    },
  },
  Mutation: {

  },
};

export default categoriesResolvers;
