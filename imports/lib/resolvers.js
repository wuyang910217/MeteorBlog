import { merge } from 'lodash';
import testsResolvers from './test/resolvers';
import postsResolvers from './posts/resolvers';
import tagsResolvers from './tags/resolvers';
import usersResolvers from './users/resolvers';

const resolvers = merge(testsResolvers, postsResolvers, tagsResolvers, usersResolvers);

export default resolvers;
