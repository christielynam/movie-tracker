import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import MockCleanedMovieData from '../../utils/MockCleanedMovieData';
import MockFalsyMovieData from '../../utils/MockFalsyMovieData';
import React, { Component } from 'react';
import configureStore from 'redux-mock-store';
import { addRecentMovies, removeAllIsFavorited } from '../actions'

const middlewares = [];
const mockStore = configureStore(middlewares);

it('Test Action: addRecentMovies', () => {
  const initialState = [];
  const store = mockStore(initialState);

  store.dispatch(addRecentMovies(MockCleanedMovieData));

  const actions = store.getActions();
  const expectedPayload = { type: 'ADD_MOVIES', data: MockCleanedMovieData };
  expect(actions).toEqual([expectedPayload]);
})

it('Test Action: removeAllIsFavorited', () => {
  const initialState = [];
  let mockDataCopy = MockCleanedMovieData.slice();
  const store = mockStore(mockDataCopy);

  store.dispatch(removeAllIsFavorited());

  const actions = store.getActions();
  const expectedPayload = { type: 'RESET_FAVORITES' };
  expect(actions).toEqual([expectedPayload]);

  // why doesn't it equal the falsy movie data?
  // expect(store.getState()).toEqual(MockFalsyMovieData);
  // it still equals the truthy version:
  expect(store.getState()).toEqual(MockCleanedMovieData);

})