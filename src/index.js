import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import AppRoutes from './assets/javascript/routes';
import configureStore from './store/configureStore';

import './assets/stylesheets/index.css';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
