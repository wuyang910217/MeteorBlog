import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import Welcome from './components/Welcome';
import AppLayout from './components/layout/MainLayout';

export default function (injectDeps,{FlowRouter}){
  const MainLayoutCtx = injectDeps(AppLayout);

  FlowRouter.route('/', {
    name: 'welcome',
    action() {
      mount(MainLayoutCtx,{
        content: ()=> (<Welcome />)
      });
    }
  });


}

