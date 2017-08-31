
import React from 'react';

const addFavoriteMovie = (movie)  => {
  
  console.log(movie.movieId)
  fetch('/api/users/favorites/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ movie_id: movie.movieId, user_id: 1, title: movie.title, poster_path: movie.posterImg, release_date: movie.releaseDate, vote_average: movie.voteAverage, overview: movie.description  })
  }).then(res => res.json())
  .then(res => console.log('RESULT OF ADD FAVORITE', res))
}

const MovieCard = ({ movie }) => {

  return(
    <div>
      <img className='movie-poster' src={`https://image.tmdb.org/t/p/w500${movie.posterImg}`} />
      <button className='favorite-movie-btn' 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                addFavoriteMovie(movie);
              }}
              >FAV</button>
    </div>
  )
}

export default MovieCard;