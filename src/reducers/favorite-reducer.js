const favoritesB = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            console.log('state: ', state)
            // let movieArray = state
            // let updatedArray = movieArray.map(movie =>{ 
            //     if (movie.movieId === movieID) {
            //         movie.isFavorited = true
            //     }  
            //     return updatedArray
            // })
            return state  ;
        default: 
            return state ;
    }
}

export default favoritesB