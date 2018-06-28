import { createBrowserHistory } from 'history/es';
import { configure } from 'candidatexyz-common-js';

import { LOCAL } from './local';

export let history = createBrowserHistory();

configure({ developmentRoutes: LOCAL });
