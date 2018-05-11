import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { makeMainRoutes } from './routes';

import '../node_modules/material-components-web/dist/material-components-web.min.css';
import '../node_modules/auth0-js/build/auth0.min';

import './index.css';

const routes = makeMainRoutes();

ReactDOM.render(
    routes,
    document.getElementById('root')
);

registerServiceWorker();
