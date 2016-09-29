import { merge } from 'lodash';
import postsResolvers from './posts/resolvers';
import tagsResolvers from './tags/resolvers';

const resolvers = merge(postsResolvers, tagsResolvers);

export default resolvers;
