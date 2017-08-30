import React, { Component } from 'react';
import movieApi from '../../../utils/movieApi';
import Body from './Body/Body';

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
    .then(data => {
      console.log('movie props', this.props.movies)
    })
  }

  render() {
    const { movies } = this.props
    return (
      <div>
        <h1>Movie Watcher</h1>
        <Body />
      </div>
    )
  }
}
