import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/App-container';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const history = createHistory()

const middleware = routerMiddleware(history)

const store = createStore(rootReducer, devTools, applyMiddleware(middleware));

ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path='/' component={AppContainer} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('main')
)
