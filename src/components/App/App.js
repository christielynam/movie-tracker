import React, { Component } from 'react';
import movieApi from '../../../utils/movieApi'

export default class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('COMPONENT DID MOUNT')
    let movieApiObj = new movieApi();
    movieApiObj.fetchAllMovies()
    .then(data => {
      console.log('IN COMPONENT:', data.results)
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
