import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
// import movieApi from '../../utils/movieApi';
// import fetchMock from 'fetch-mock';
import MockCleanedMovieData from '../../utils/MockCleanedMovieData';
// import AppContainer from '../containers/App-container';
// import { Provider } from 'react-redux';
// var key = require('../../utils/key');

import React, { Component } from 'react';
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from '../reducers';
// import createHistory from 'history/createBrowserHistory';
// import { Route } from 'react-router';
// import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';

import configureStore from 'redux-mock-store';
import { addRecentMovies } from '../actions'
// import nock from 'nock';
const middlewares = [];
const mockStore = configureStore(middlewares);

it('should work!', () => {
  const initialState = [];
  const store = mockStore(initialState);

  store.dispatch(addRecentMovies(MockCleanedMovieData));

  const actions = store.getActions();
  const expectedPayload = { type: 'ADD_MOVIES', data: MockCleanedMovieData };
  expect(actions).toEqual([expectedPayload]);

})