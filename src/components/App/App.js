import React, { Component } from 'react';
import movieApi from '../../../utils/movieApi';
import Body from './Body/Body';
import Header from './Header/Header';
import CreateUserAccount from './CreateUserAccount/CreateUserAccount';
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
      <div>
        <Header />
        <Route exact path='/signup' component={CreateUserAccount} />
        <Body />
      </div>
    )
  }
}
