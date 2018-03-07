import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import AppRoutes from './routes';
import configureStore from './store/configureStore'; 

import './assets/stylesheets/index.css';
// import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
