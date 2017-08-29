import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App'
import MovieDirectory from './components/App/Body/MovieDirectory/MovieDirectory';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './reducers'

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// const store = createStore(rootReducer, devTools);

// <Provider store={ store } >
// </Provider>,
ReactDOM.render(
    <App />,
  document.getElementById('main')
)
