const movies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return [...state, ...action.data];
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
      console.log('newState: ', updatedArray)    
      return updatedArray;
    case 'FETCH_FAVORITES':
      let serverFavorites = action.data
     return serverFavorites.forEach(favMovie => {
          movies.map(movie => {
           if  (favMovie.movieId === movie.movieId) {
             movie.isFavorited = true;
           }
           return movie
          })
      }) 
      
      return 



    default:
      return state;
  }
}

export default movies;
