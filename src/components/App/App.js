import React, { Component } from 'react';
import {fetchAllMovies} from '../../../utils/movieApi';
import Body from './Body/Body';
import Header from './Header/Header';
import Modal from './Account/Modal/Modal';
import { Route } from 'react-router';

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // let movieApiObj = new movieApi();
    fetchAllMovies()
    .then(data => {
      this.props.fetchRecentMovies(data)
    })
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <Route exact path='/signin' render={() => <Modal action='signin' />} />
        <Route exact path='/signup' render={() => <Modal action='signup' />} />
        <Body />
      </div>
    )
  }
}
