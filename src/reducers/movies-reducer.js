const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return [...action.data];
    case 'ADD_FAVORITE':
      // console.log('action: ', action.data.movieId)
      let matchedId = action.data.movieId
      let movieArray = state
      let updatedArray = movieArray.map(movie =>{

          if (movie.movieId === matchedId) {
              // console.log('movieA: ',movie)
              movie.isFavorited = !movie.isFavorited
          }
          return movie
      })
      // console.log('newState: ', updatedArray)
      return updatedArray;
    case 'FETCH_FAVORITES':
      let serverFavorites = action.data
      console.log('SERVER FAVS:', serverFavorites);
      let storeMovies = state.slice()
      console.log('STORE MOVIES COPY:', storeMovies);
          serverFavorites.forEach(favMovie => {
            storeMovies.forEach(movie => {
           if  (favMovie.movie_id === movie.movieId) {
             console.log('match!')
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
