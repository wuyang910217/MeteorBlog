import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import AppLayout from './components/layout/MainLayout';


export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(AppLayout);

  FlowRouter.route('/post', {
    name: 'post',
    action() {
      mount(MainLayoutCtx);
    },
  });

  FlowRouter.route('/post/:id', {
    name: 'detail',
    action() {
      mount(MainLayoutCtx);
    },
  });

  FlowRouter.route('/tags', {
    name: 'tags',
    action() {
      mount(MainLayoutCtx);
    },
  });

  FlowRouter.route('/tag/:id', {
    name: 'tag',
    action() {
      mount(MainLayoutCtx);
    },
  });
}

