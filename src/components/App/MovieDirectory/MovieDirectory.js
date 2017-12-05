import React, { Component } from 'react';
import CardContainer from '../../../containers/MovieCard-container';
import PropTypes from 'prop-types';

export default class MovieDirectory extends Component {
  constructor() {
    super();
  }

  render() {
    const { movies } = this.props
    const movieList = movies.map(movie =>
      <CardContainer key={movie.movieId}
        movie={movie}
      />
    )

    return (
      <div className='movie-container'>
        {movieList}
      </div>
    )
  }
}

MovieDirectory.propTypes = {
  notifications: React.PropTypes.array,
  props: PropTypes.object,
  props: PropTypes.shape({
    dispatch: PropTypes.func,
    movies: PropTypes.array,
  })
};