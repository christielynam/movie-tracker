
import React from 'react';

const addFavoritedMovie = (props)  => {
  const {movie, movies, addFavoriteMovie} = props
  fetch('/api/users/favorites/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ movie_id: movie.movieId, user_id: 1, title: movie.title, poster_path: movie.posterImg, release_date: movie.releaseDate, vote_average: movie.voteAverage, overview: movie.description  })
  }).then(res => res.json())
  .then(res => {
    addFavoriteMovie(movie)
    console.log('RESULT OF ADD FAVORITE', res)})
}

const MovieCard = (props) => {

  return(
    <div>
      <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500${props.movie.posterImg}`} />
      <button className='favorite-movie-btn' 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                addFavoritedMovie(props);
              }}
              >FAV</button>
    </div>
  )
}

export default MovieCard;