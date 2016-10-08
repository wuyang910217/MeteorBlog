import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import AppLayout from './components/layout/MainLayout';


export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(AppLayout);

  FlowRouter.route('/admin', {
    name: '/',
    action() {
      mount(MainLayoutCtx);
    },
  });
}

