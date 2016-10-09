import Faker from 'faker';
import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';
import { Posts } from './posts/posts';
import { Tags } from './tags/tags';

if (Meteor.isDevelopment) {
  Factory.define('user', Meteor.users, {
    username: Faker.name.findName(),
    profile: {
      username: Faker.name.findName(),
      email: Faker.internet.email(),
      avatar_url: Faker.image.imageUrl(),
    },
    githubInfo: {
      id: Faker.random.number(),
      username: Faker.name.findName(),
      public_repos: Faker.random.number(),
      followers: Faker.random.number(),
      blog: Faker.internet.url(),
      bio: Faker.lorem.word(),
    },
    roles: Faker.system.fileName(),
    createdAt: Date.now(),
  });

  Factory.define('post', Posts, {
    authorName: Faker.name.findName(),
    title: Faker.name.title(),
    summary: Faker.lorem.sentence(),
    content: Faker.lorem.paragraph(),
    updatedAt: Date.now(),
    createdAt: Date.now(),
  });

  Factory.define('tag', Tags, {
    authorName: Faker.name.findName(),
    tagName: Faker.lorem.word(),
    updatedAt: Date.now(),
    createdAt: Date.now(),
  });

  // 每运行一次（修改保存，错误重启），就会插入一条
  const user = Factory.create('user');
  const post = Factory.create('post');
  const tag = Factory.create('tag');

  console.log(user);
  console.log(post);
  console.log(tag);
}
