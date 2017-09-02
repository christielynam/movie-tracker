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
    fetch(`/api/users/1/favorites`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify({user_id: 1 })
    }).then(res => res.json())
    .then(res => {
      fetchUserFavorites()
      console.log('RESULT OF FETCH FAVS', res)})
  }

  componentDidMount() {
    let movieApiObj = new movieApi();
    movieApiObj.fetchAllMovies()
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
