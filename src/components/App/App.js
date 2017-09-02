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

  retrieveFavoriteMovies() {
    fetch(`/api/users/1/favorites`)
    .then(res => res.json())
    .then(data => {
      if (data.status === 'success') {
        if (data.data.length > 0) {
          this.props.fetchUserFavorites(data.data)
        }
      }
      console.log('RESULT OF FETCH FAVS', data)
    })
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
      this.props.fetchRecentMovies(data);// send movies to store
      this.retrieveLocalStorage()
      this.retrieveFavoriteMovies();
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
