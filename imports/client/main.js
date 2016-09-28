import { createApp } from 'mantra-core';
import injectTapEventPlugin from 'react-tap-event-plugin';

import initContext from './configs/context';
import coreModule from './modules/core';
import './styles/main.scss';

const context = initContext();
const app = createApp(context);
app.loadModule(coreModule);
app.init();
injectTapEventPlugin();
