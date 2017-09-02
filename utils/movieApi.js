var key = require('./key');


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

  


  const fetchAllMovies = () => {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`)
      .then(results => results.json())
      .then(movies => {
        return cleanMovieData(movies.results)
      })
  }

  const fetchSignInUser = (email, password) => {
    return fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({  email: email,
                              password: password })
    }).then(results => results.json())
      .then(response => {
        return response
      })
  }



module.exports = { fetchAllMovies, fetchSignInUser };
