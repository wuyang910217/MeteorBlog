import { Meteor } from 'meteor/meteor';

const usersResolvers = {
  Query: {
    async users(root, args, context) {
      return await Meteor.users.find({}).fetch();
    },
    async user(root, args, context) {
      return Meteor.users.findOne({ _id: args.id });
    },
  },
  Mutation: {
  },
};

export default usersResolvers;
