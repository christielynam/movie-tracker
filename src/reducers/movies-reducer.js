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
      // console.log('newState: ', updatedArray)    
      return updatedArray;
    // case 'REMOVE_FAVORITE':
      



    default:
      return state;
  }
}

export default movies;
