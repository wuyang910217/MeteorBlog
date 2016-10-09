import { Meteor } from 'meteor/meteor';

const usersResolvers = {
  Query: {
    async users(root, args, context) {
      return await Meteor.users.find({}).fetch();
    },
    async user(root, args, context) {
      return await Meteor.users.findOne({ _id: args.id });
    },
  },
  User: {
    profile: ({ profile }) => profile,
    githubInfo: ({ githubInfo }) => githubInfo,
  },
  Mutation: {
  },
};

export default usersResolvers;
