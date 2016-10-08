import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Tracker } from 'meteor/tracker';
import { ReactiveDict } from 'meteor/reactive-dict';

export default function () {
  return {
    Meteor,
    FlowRouter,
    Tracker,
    LocalState: new ReactiveDict(),
  };
}
