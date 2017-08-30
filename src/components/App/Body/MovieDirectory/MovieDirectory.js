import React, { Component } from 'react';
import MovieCard from './MovieCard/MovieCard'

export default class MovieDirectory extends Component {
  constructor() {
    super();
  }

  render() {
    const { movies } = this.props
    const movieList = movies.map( movie => {
      return <MovieCard key = { movie.id } movie = { movie } />
    })


    return (
      <div>
        { movieList }
      </div>
    )
  }
}
