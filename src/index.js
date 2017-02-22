require("babel-core/register");
require("babel-polyfill");
import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './stores/index.js'
import App from './components/Main.js';

// Render the main component into the dom
ReactDOM.render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
    document.getElementById('app'));
