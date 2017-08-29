class movieApi {
  constructor() {

  }


  fetchAllMovies() {
    //0b1096e689aa8acb28ccef63b3a935c0
    return fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=0b1096e689aa8acb28ccef63b3a935c0&language=en-US&page=1')
      .then(results => results.json())
      // .then(movies => {
      //   console.log('MOVIES', movies.results)
      // })
  }
}

module.exports = movieApi;