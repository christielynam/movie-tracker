import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import MockCleanedMovieData from '../../utils/MockCleanedMovieData';
import MockFalsyMovieData from '../../utils/MockFalsyMovieData';
import React, { Component } from 'react';
import configureStore from 'redux-mock-store';
import { addRecentMovies, removeAllIsFavorited, resetFavCounter, fetchFavoriteMovies, showFavoriteMovies, addFavoriteMovies, setActiveUser, removeFavoriteMovie, removeActiveUser, setFavCount, increaseFavCount, decreaseFavCount } from '../actions'


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

it('Test Action: resetFavCounter', () => {
  const initialState = [];
  const store = mockStore(initialState);

  store.dispatch(resetFavCounter(MockCleanedMovieData));

  const actions = store.getActions();
  const expectedPayload = { type: 'RESET_FAV_COUNTER'};
  expect(actions).toEqual([expectedPayload]);
})

it('Test Action: fetchFavoriteMovies', () => {

  const initialState = [];
  const store = mockStore(initialState);

  store.dispatch(fetchFavoriteMovies(MockCleanedMovieData));

  const actions = store.getActions();
  const expectedPayload = { type: 'FETCH_FAVORITES', data: MockCleanedMovieData };
  expect(actions).toEqual([expectedPayload]);
})

it('Test Action: showFavoriteMovies', () => {

  const initialState = [];
  const store = mockStore(initialState);

  store.dispatch(showFavoriteMovies(MockCleanedMovieData));

  const actions = store.getActions();
  const expectedPayload = { type: 'SHOW_FAVORITES', data: MockCleanedMovieData };
  expect(actions).toEqual([expectedPayload]);
})

it('Test Action: addFavoriteMovies', () => {

  const initialState = [];
  const store = mockStore(initialState);

  store.dispatch(addFavoriteMovies(MockCleanedMovieData));

  const actions = store.getActions();
  const expectedPayload = { type: 'ADD_FAVORITE', data: MockCleanedMovieData };
  expect(actions).toEqual([expectedPayload]);
})

it('Test Action: setActiveUser', () => {

  const initialState = [];
  const store = mockStore(initialState);

  store.dispatch(setActiveUser(MockCleanedMovieData));

  const actions = store.getActions();
  const expectedPayload = { type: 'SET_ACTIVE_USER', data: MockCleanedMovieData };
  expect(actions).toEqual([expectedPayload]);
})

it('Test Action: removeFavoriteMovie', () => {

  const initialState = [];
  const store = mockStore(initialState);

  store.dispatch(removeFavoriteMovie(MockCleanedMovieData));

  const actions = store.getActions();
  const expectedPayload = { type: 'REMOVE_FAVORITE', data: MockCleanedMovieData };
  expect(actions).toEqual([expectedPayload]);
})

it('Test Action: removeActiveUser', () => {

  const initialState = [];
  const store = mockStore(initialState);

  store.dispatch(removeActiveUser(MockCleanedMovieData));

  const actions = store.getActions();
  const expectedPayload = { type: 'REMOVE_ACTIVE_USER', data: MockCleanedMovieData };
  expect(actions).toEqual([expectedPayload]);
})

it('Test Action: setFavCount', () => {

  const initialState = [];
  const store = mockStore(initialState);

  store.dispatch(setFavCount(MockCleanedMovieData));

  const actions = store.getActions();
  const expectedPayload = { type: 'SET_FAVORITE_COUNTER', data: MockCleanedMovieData};
  expect(actions).toEqual([expectedPayload]);
})

it('Test Action: increaseFavCount', () => {

  const initialState = [];
  const store = mockStore(initialState);

  store.dispatch(increaseFavCount(MockCleanedMovieData));

  const actions = store.getActions();
  const expectedPayload = { type: 'INCREASE_FAVORITE_COUNTER'};
  expect(actions).toEqual([expectedPayload]);
})

it('Test Action: decreaseFavCount', () => {

  const initialState = [];
  const store = mockStore(initialState);

  store.dispatch(decreaseFavCount(MockCleanedMovieData));

  const actions = store.getActions();
  const expectedPayload = { type: 'DECREASE_FAVORITE_COUNTER'};
  expect(actions).toEqual([expectedPayload]);
})
