import { Mongo } from 'meteor/mongo';

export const PostTests = new Mongo.Collection('postTests');

if (PostTests.find().count() >= 10) {
  PostTests.remove({});
}
