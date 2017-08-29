import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import MovieDirectory from './components/MovieDirectory';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, devTools);

render(
  <Provider store={ store } >
    <App />
  </Provider>,
  document.getElementById('root')
)
