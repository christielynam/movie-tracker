import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/App-container';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider store={ store } >
    <AppContainer />
  </Provider>,
  document.getElementById('main')
)
