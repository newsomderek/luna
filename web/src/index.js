import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App/App';

import '../node_modules/auth0-js/build/auth0.min';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
