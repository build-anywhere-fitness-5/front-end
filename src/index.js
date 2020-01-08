import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { classReducer } from './reducers/index'
import thunk from 'redux-thunk'


import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import 'normalize.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [
    thunk, logger
]
const store = createStore(classReducer, composeEnhancers(applyMiddleware(...middleware)));

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
