import React, { Component } from 'react';
import movieApi from '../../../utils/movieApi';
import Body from './Body/Body';
import Header from './Header/Header';
import Modal from './Account/Modal/Modal';
import { Route } from 'react-router';

export default class App extends Component {
  constructor() {
    super();
  }

  retrieveLocalStorage() {
    if (localStorage.getItem('user')) {
      this.props.handleSignInSuccess(localStorage.getItem('user'))  
    }

    // if (Object.keys(this.props.activeAccount).length === 0) {
    //   console.log(' no user signed in')
    // } else {
    //   console.log('user signed in');
    // }

  }

  componentDidMount() {
    let movieApiObj = new movieApi();
    movieApiObj.fetchAllMovies()
    .then(data => {
      this.props.fetchRecentMovies(data)
      this.retrieveLocalStorage()
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
