const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return [...action.data];

    case 'ADD_FAVORITE':
      let matchedId = action.data.movieId
      let movieArray = [...state]
      let updatedArray = movieArray.map(movie => {
        if (movie.movieId === matchedId) {
          movie.isFavorited = !movie.isFavorited
        }
        return movie
      })
      return updatedArray;

    case 'FETCH_FAVORITES':
      let serverFavorites = action.data;
      let storeMovies = state.slice();
      serverFavorites.forEach(favMovie => {
        storeMovies.forEach(movie => {
          if (favMovie.movie_id === movie.movieId) {
            movie.isFavorited = true;
          }
        })
      })
      return storeMovies;
      
    case 'RESET_FAVORITES':
      return state.map(movie => {
        movie.isFavorited = false;
        return movie;
      });

    case 'SHOW_FAVORITES':
      return state.filter(movie => {
        return movie.isFavorited;
      });

    default:
      return state;
  }
}

export default movies;
