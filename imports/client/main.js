import { createApp } from 'mantra-core';
import injectTapEventPlugin from 'react-tap-event-plugin';

import initContext from './configs/context';
import coreModule from './modules/core';
import adminModule from './modules/admin';
import postModule from './modules/post';
import './styles/main.scss';

const context = initContext();
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(adminModule);
app.loadModule(postModule);
app.init();
injectTapEventPlugin();
