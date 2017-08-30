var key = require('./key');

class movieApi {
  constructor() {

  }

  cleanMovieData(movieArray) {
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


  fetchAllMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`)
      .then(results => results.json())
      .then(movies => {
        return this.cleanMovieData(movies.results)
      })
  }
}

module.exports = movieApi;
