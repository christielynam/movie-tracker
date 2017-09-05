import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { fetchAllMovies, fetchFavoriteMovies } from '../../utils/movieApi';
import fetchMock from 'fetch-mock';
import MockMovieData from '../../utils/MockMovieData';
import AppContainer from '../containers/App-container';
import App from '../components/App/App'
import { Provider } from 'react-redux';
var key = require('../../utils/key');

import { Router } from 'react-router-dom';

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';

import configureMockStore from 'redux-mock-store';
import { addRecentMovies } from '../actions'
import nock from 'nock';


//TODO:
//  look into https://github.com/mzabriskie/moxios
// and axios


describe('App Component', () => {
  let wrapper;
  let mockFn;
  let mockMiddleware = []; //routerMiddleware(history);
  let mockStore = configureMockStore(mockMiddleware);
  const dummySetTimeoutPromise = () => new Promise(resolve => setTimeout(() => resolve(), 10));
  
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
    nock.cleanAll();
  })

  test.skip('nock test for fetch of movies api', async () => {
    nock(`https://api.themoviedb.org/`)
      .get(`/3/movie/now_playing?api_key=${key}`)
      .reply(200, MockMovieData)
    // { body: { todos: ['do something'] } }

    const expectedActions = [
      { type: 'ADD_MOVIES', data: { todos: ['do something'] }}
    ]

    const store = mockStore({ todos: [] })
    return store.dispatch(addRecentMovies({ todos: ['do something'] }))
    expect(store.getActions()).toEqual(expectedActions);
  });



  test.skip('fetch-mock test for fetch of users favorites', async () => {
    fetchMock.mock(`http://localhost:3000/api/users/1/favorites`,
    {
      status: 200, // we're mocking the response, so essentially we're saying we got back a 200 status
      body: MockMovieData
    },
      { method: 'GET' }
    )

    expect(fetchMock._matchedCalls.length).toEqual(0);
    expect(fetchMock.routes[0].method).toEqual('GET')
    expect(fetchMock.routes[0].response.body).toEqual(MockMovieData)

    fetchFavoriteMovies(1);

    const store = mockStore({ todos: [] })
    wrapper = mount(
      <Provider store={store}>
        <Router history={history}>
          <div>
            <AppContainer store={store} />
          </div>
        </Router>
      </Provider>
    );

    expect(fetchMock._matchedCalls.length).toEqual(1)
    expect(fetchMock.called()).toEqual(true);
  });




  test.skip('nock test for fetch of users favorites', async () => {
    nock(`http://localhost:3000`)
      .get(`/api/users/1/favorites`)
      // .query(true)
      // .query({ api_key: key})
      .reply(200, MockMovieData)
    // {
    //   'Access-Control-Allow-Origin': '*',
    //     'Content-type': 'application/json'
    // }

    fetchFavoriteMovies(1)
    .then(what => {
      console.log('WHAT???', what)
    })

    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=${key}')
    .then(results => results.json())
    .then(movies => {
      console.log('COPY THIS:', movies);
    })

  });


})
