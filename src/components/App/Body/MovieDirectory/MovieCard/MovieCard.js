
import React from 'react';

const addFavoritedMovie = (props)  => {
  console.log('FAV HIT!!!!')
  const {movie, movies, addMovietoFavorites, activeAccount} = props
  fetch('/api/users/favorites/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ movie_id: movie.movieId, user_id: activeAccount.id, title: movie.title, poster_path: movie.posterImg, release_date: movie.releaseDate, vote_average: movie.voteAverage, overview: movie.description  })
  }).then(res => res.json())
  .then(res => {
    addMovietoFavorites(movie)
    console.log('RESULT OF ADD FAVORITE', res)})
}

const removeFavoritedMovie = (props) => {
  console.log('REMOVE HIT!')
  console.log('PROPS @ DELETE FAV:', props)
  const {movie, movies, addMovietoFavorites, activeAccount} = props
  fetch(`/api/users/${activeAccount.id}/favorites/${movie.movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body:  JSON.stringify({ movie_id: movie.movieId, user_id: activeAccount.id })
  }).then(res => res.json())
  .then(res => {
    addMovietoFavorites(movie)
    console.log('RESULT OF REMOVE FAVORITE', res)})
}

const checkFavorite = (props) => {
  const { movie } = props
  console.log('movie: ', movie)
  console.log('isFavorited: ', movie.isFavorited)
  // is a user signed in?
  // YES: do this check
  movie.isFavorited ? removeFavoritedMovie(props) : addFavoritedMovie(props) 
  // NO: 
  // redirect the user to sign in
}



const MovieCard = (props) => {
  console.log(props.movie.isFavorited)
  const favClass = props.movie.isFavorited ? "favorite-movie-btn favorited-movie-active" : "favorite-movie-btn"
  

  return(
    <div className='movie-card'>
      <div className='button-container'>
        <button className={favClass}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  checkFavorite(props);
                }}
                ></button>
      </div>
      <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500${props.movie.posterImg}`} />

    </div>
  )
}

export default MovieCard;