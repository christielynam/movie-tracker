import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';


const FullMovieDetail = (props) => {
    const selectedId = props.location.pathname.replace('/fullmoviedetail/', '')
    
    const selectedArray = props.movies.filter( movie =>
      movie.movieId == selectedId
    );
    const selectedMovie = selectedArray[0]
    const favClass = selectedMovie.isFavorited ? "favorite-movie-btn favorited-movie-active" : "favorite-movie-btn"

    return(
      <div className='movie-detail'
          onClick={(e) => {
            e.preventDefault();
            props.changeRoute(`/`);
          }}>
        <h2>{selectedMovie.title}</h2>
        <img className='movie-poster-detail' src={`https://image.tmdb.org/t/p/w500${selectedMovie.posterImg}`} />
        <p>Released: {selectedMovie.releaseDate}</p>
        <p>Rating: {selectedMovie.voteAverage}</p>
        <p>Summary: {selectedMovie.description}</p>
      </div>
    )
}

export default withRouter(FullMovieDetail);


FullMovieDetail.propTypes = {
    notifications: React.PropTypes.array,
    props: PropTypes.object,
    props: PropTypes.shape({
      activeAccount: PropTypes.object,
      addMovietoFavorites: PropTypes.func,
      alertme: PropTypes.func,
      changeRoute: PropTypes.func,
      decreaseFavCount: PropTypes.func,
      favoritesCounter: PropTypes.number,
      increaseFavCount: PropTypes.func,
      movie: PropTypes.object,
      movies: PropTypes.array,
    })
  };