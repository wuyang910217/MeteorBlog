import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import Welcome from './components/Welcome';
import AppLayout from './components/layout/MainLayout';
import TestCom from './components/TestCom';

export default function (injectDeps){
  const MainLayoutCtx = injectDeps(AppLayout);

  FlowRouter.route('/', {
    name: 'welcome',
    action({}) {
      mount(MainLayoutCtx,{
        content: ()=> (<Welcome />)});
      }
  });
}

