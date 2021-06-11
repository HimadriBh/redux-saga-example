import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore, compose } from 'redux';

import { reducer } from './redux'
import createSageMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import { watcherSaga } from './sagas';

const sagaMiddleware = createSageMiddleware();

const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)))

// run the saga
sagaMiddleware.run(watcherSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

