import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import movieApi from '../../utils/movieApi';
import fetchMock from 'fetch-mock';
import MockMovieData from '../../utils/MockMovieData';
import AppContainer from '../containers/App-container';
import { Provider } from 'react-redux';
var key = require('../../utils/key');

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';





describe('App Component', () => {
  let wrapper;
  let mockFn;
  let middleware;
  let store;
  const dummySetTimeoutPromise = () => new Promise(resolve => setTimeout(() => resolve(), 10));
  
  beforeAll(function () {
    middleware = routerMiddleware(history);
    store = createStore(rootReducer, applyMiddleware(middleware));

  })

  afterEach(function () {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  })

  beforeEach(function () {
    fetchMock.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`, {
      status: 200, // we're mocking the response, so essentially we're saying we got back a 200 status
      body: MockMovieData
    })
  })

  test('state obj for movies fetch should be set correctly', async () => {

    expect(fetchMock._matchedCalls.length).toEqual(0);
    expect(fetchMock.routes[0].method).toEqual('GET')
    expect(fetchMock.routes[0].response.body).toEqual(MockMovieData)

    wrapper = mount(<Provider store={ store } />);

    expect(fetchMock._matchedCalls.length).toEqual(1)
    expect(fetchMock.called()).toEqual(true);

    // await dummySetTimeoutPromise();

    // await fetchMock.flush()
    //   .then(result => {
    //     expect(Object.keys(wrapper.state('crawlObj')).length).toEqual(4);
    //   })

  });

})
