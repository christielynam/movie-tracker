import React, { Component } from 'react';
import movieApi from '../../../utils/movieApi'

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('props', this.props.fetchRecentMovies)
    let movieApiObj = new movieApi();
    movieApiObj.fetchAllMovies()
    .then(data => {
      this.props.fetchRecentMovies(data.results)
    })
  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        <h1>Movie Watcher</h1>
      </div>
    )
  }
}
