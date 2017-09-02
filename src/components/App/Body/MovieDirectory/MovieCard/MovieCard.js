
import React from 'react';

const addFavoritedMovie = (props)  => {
  console.log('FAV HIT!!!!')
  const {movie, movies, addMovietoFavorites} = props
  fetch('/api/users/favorites/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ movie_id: movie.movieId, user_id: 1, title: movie.title, poster_path: movie.posterImg, release_date: movie.releaseDate, vote_average: movie.voteAverage, overview: movie.description  })
  }).then(res => res.json())
  .then(res => {
    addMovietoFavorites(movie)
    console.log('RESULT OF ADD FAVORITE', res)})
}

const removeFavoritedMovie = (props) => {
  console.log('REMOVE HIT!')
  console.log('PROPS @ DELETE FAV:', props)
  const {movie, movies, addMovietoFavorites} = props
  fetch(`/api/users/1/favorites/${movie.movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify({ movie_id: movie.movieId, user_id: 1 })
  }).then(res => res.json())
  .then(res => {
    addMovietoFavorites(movie)
    console.log('RESULT OF REMOVE FAVORITE', res)})
}

const checkFavorite = (props) => {
  const { movie } = props
  console.log('isFavorited: ', movie.isFavorited)
  // is a user signed in?
  // YES: do this check
  movie.isFavorited ? removeFavoritedMovie(props) : addFavoritedMovie(props) 
  // NO: 
  // redirect the user to sign in
}


const MovieCard = (props) => {

  return(
    <div>
      <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500${props.movie.posterImg}`} />
      <button className='favorite-movie-btn' 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                checkFavorite(props);
              }}
              ></button>
    </div>
  )
}

export default MovieCard;