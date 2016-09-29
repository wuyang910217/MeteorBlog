import { merge } from 'lodash';
import testsResolvers from './test/resolvers';
import postsResolvers from './posts/resolvers';
import tagsResolvers from './tags/resolvers';
import usersResolvers from './users/resolvers';
import categoriesResolvers from './categories/resolvers';
import commentsResolvers from './comments/resolvers';
import notesResolvers from './notes/resolvers';
import notificationsResolvers from './notifications/resolvers';

const resolvers = merge(testsResolvers, postsResolvers,
  tagsResolvers, usersResolvers,
  categoriesResolvers, commentsResolvers,
  notesResolvers, notificationsResolvers);

export default resolvers;
