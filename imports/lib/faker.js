import Faker from 'faker';
import { Factory } from 'meteor/dburles:factory';
import { Posts } from './posts/posts';
import { Tags } from './tags/tags';

Factory.define('post', Posts, {
  authorName: Faker.name.findName(),
  title: Faker.name.title(),
  summary: Faker.lorem.sentence(),
  content: Faker.lorem.paragraph(),
  updatedAt: Date.now(),
});

Factory.define('tag', Tags, {
  authorName: Faker.name.findName(),
  tagName: Faker.lorem.word(),
  updatedAt: Date.now(),
});

// 每运行一次（修改保存，错误重启），就会插入一条
const post = Factory.create('post');
const tag = Factory.create('tag');
console.log(post, tag);

