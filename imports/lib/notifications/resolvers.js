import { Notifications } from './notifications.js';

const notificationsResolvers = {
  Query: {
    async notifications(root, args, context) {
      return await Notifications.find({}).fetch();
    },
  },
  Mutation: {

  },
};

export default notificationsResolvers;
