import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import Welcome from './components/Welcome';
import AppLayout from './components/layout/MainLayout';

export default function (injectDeps){
  const MainLayoutCtx = injectDeps(AppLayout);

  // FlowRouter.route('/', {
  //   name: 'welcome',
  //   action({}) {
  //     mount(MainLayoutCtx,{
  //       content: ()=> (<Welcome />)});
  //     }
  // });
  FlowRouter.route('/', {
    name: '/',
    action() {
      mount(Welcome);
    }
  });

  FlowRouter.route('/blog', {
    name: '/blog',
    action() {
      mount(MainLayoutCtx,{
        content: () => (<Welcome />)
      });
    }
  });

  FlowRouter.route('/runningman', {
    name: '/runningman',
    action() {
      mount(MainLayoutCtx,{
        content: () => (<Welcome />)
      });
    }
  });
  FlowRouter.route('/oldfriends', {
    name: '/oldfriends',
    action() {
      mount(MainLayoutCtx,{
        content: () => (<Welcome />)
      });
    }
  });
}

