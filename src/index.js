require('babel-core/register');
require('babel-polyfill');
require('isomorphic-fetch');
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import store from './stores/index.js'
import routes from './routes.js';

const root = (
    <Provider store={ store } key='provider'>
      <Router history={ browserHistory }>
        { routes }
      </Router>
   </Provider>
);

// Render the main component into the dom
ReactDOM.render(
    root,
    document.getElementById('app'));
