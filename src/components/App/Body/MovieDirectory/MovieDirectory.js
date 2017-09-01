import React, { Component } from 'react';
import CardContainer from '../../../../containers/Card-container'

export default class MovieDirectory extends Component {
  constructor() {
    super();
  }

  render() {
    const { movies } = this.props
    const movieList = movies.map( movie => {
      return <CardContainer key={ movie.movieId } movie={ movie } />
    })

    return (
      <div className='movie-container'>
        { movieList }
      </div>
    )
  }
}
