import React, { Component } from 'react';
import MovieCard from './MovieCard/MovieCard'

export default class MovieDirectory extends Component {
  constructor() {
    super();
  }

  render() {
    const { movies } = this.props
    const movieList = movies.map( movie => {
      // console.log('Title:', movie.title, 'Key:', `${movie.movieId}-${i}`);
      return <MovieCard key={ movie.movieId } movie={ movie } />
    })

    return (
      <div>
        { movieList }
      </div>
    )
  }
}
