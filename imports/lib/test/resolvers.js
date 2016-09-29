import Faker from 'faker';
import { PostTests } from './tests';

const testsResolvers = {
  Query: {
    async postsTest(root, args, context) {
      return await PostTests.find({}).fetch();
    },
    async postTest(root, args, context) {
      return PostTests.findOne({ authorName: args.authorName });
    },
  },
  Mutation: {
    async insertPostTest(root, args, context) {
      const res = PostTests.findOne({ title: args.title });
      if (res === undefined) {
        const postId = PostTests.insert({
          authorName: args.authorName,
          title: args.title,
          summary: Faker.lorem.sentence(),
          content: Faker.lorem.paragraph(),
          tags: Faker.lorem.word(),
          postUrl: Faker.internet.url(),
          isPublic: Faker.random.boolean(),
          likeCount: Faker.random.number(),
          updatedAt: Date.now(),
          createdAt: Date.now(),
        });
        return {
          _id: postId,
          title: args.title,
          authorName: args.authorName,
        };
      }
      throw new Error(`${args.title} has already exist.`);
    },
  },
};

export default testsResolvers;
