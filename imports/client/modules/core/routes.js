import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import AppLayout from './components/layout/MainLayout.js';
import Welcome from './components/Welcome.js';
import Runningman from './components/static/runningman.js';
import Friends from './components/static/friends.js';
import Startrek from './components/static/startrek.js';
import NotFound from './components/component/notfound.js';

export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(AppLayout);

  FlowRouter.route('/', {
    name: '/',
    action() {
      mount(Welcome);
    },
  });

  FlowRouter.route('/archive', {
    name: '/archive',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Welcome />),
      });
    },
  });

  FlowRouter.route('/about', {
    name: 'about',
    action: () => {
      mount(MainLayoutCtx, {
        content: () => (<Welcome />),
      });
    },
  });

  FlowRouter.notFound = {
    action: () => {
      mount(NotFound);
    },
  };

  const favouriteRoute = FlowRouter.group({
    prefix: '/favourite',
    name: 'favourite',
    triggersEnter: [],
  });

  favouriteRoute.route('/runningman', {
    name: 'runningman',
    action: () => {
      mount(Runningman);
    },
  });

  favouriteRoute.route('/friends', {
    name: 'friends',
    action: () => {
      mount(Friends);
    },
  });

  favouriteRoute.route('/startrek', {
    name: 'startrek',
    action: () => {
      mount(Startrek);
    },
  });
}

