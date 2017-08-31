import React, { Component } from 'react';
import movieApi from '../../../utils/movieApi';
import Body from './Body/Body';
import Header from './Header/Header';
import SignIn from './Account/SignIn/SignIn';
import CreateUserAccount from './Account/CreateUserAccount/CreateUserAccount';
import { Route } from 'react-router';

export default class App extends Component {
  constructor() {
    super();
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
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={CreateUserAccount} />
        <Body />
      </div>
    )
  }
}
