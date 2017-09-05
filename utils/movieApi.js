var key = require('./key');

const fetchAllMovies = () => {
  return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`)
  .then(results => results.json())
  .then(movies => {
    console.log('COPY THIS:', movies);
    return cleanMovieData(movies.results)
  })
}

const fetchFavoriteMovies = (id) => {
  return fetch(`/api/users/${id}/favorites`)
    .then(result => result.json())
    .then(response => {
      return response;
    })
}

const fetchAddFavoriteMovie = (movie, id) => {
  return fetch('/api/users/favorites/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ movie_id: movie.movieId, user_id: id, title: movie.title, poster_path: movie.posterImg, release_date: movie.releaseDate, vote_average: movie.voteAverage, overview: movie.description })
  }).then(result => result.json())
    .then(response => response)
}

const fetchRemoveFavoriteMovie = (movieId, userId) => {
  return fetch(`/api/users/${userId}/favorites/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ movie_id: movieId, user_id: userId })
  }).then(res => res.json())
    .then(response => response)
}

const fetchCreateUser = (name, email, password) => {
  return fetch('/api/users/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name, password: password, email: email })
  }).then(res => res.json())
    .then(response => response)
}

const fetchSignInUser = (email, password) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({  email: email,
      password: password })
  })
  .then(results => results.json())
  .then(response => response)
}

  const cleanMovieData = (movieArray) => {
    return movieArray.map(movie => {
      return {
        movieId: movie.id,
        title: movie.title,
        releaseDate: movie.release_date,
        description: movie.overview,
        voteAverage: movie.vote_average,
        posterImg: movie.poster_path,
        isFavorited: false
      }
    })
  }

module.exports = { fetchAllMovies, fetchSignInUser, fetchFavoriteMovies, fetchCreateUser, fetchAddFavoriteMovie, fetchRemoveFavoriteMovie };
