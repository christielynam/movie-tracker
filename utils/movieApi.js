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
    //0b1096e689aa8acb28ccef63b3a935c0
    return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=0b1096e689aa8acb28ccef63b3a935c0&language=en-US&page=1')
      .then(results => results.json())
      .then(movies => {
        return this.cleanMovieData(movies.results)
      })
  }
}

module.exports = movieApi;
