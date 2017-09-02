export const addRecentMovies = (data) => {
  return {
    type: 'ADD_MOVIES',
    data
  }
}

export const fetchFavoriteMovies = (data) => {
  return {
    type: 'FETCH_FAVORITES',
    data
  }
}


export const addFavoriteMovies = (data) => {
  return {
    type: 'ADD_FAVORITE',
    data
  }
}
    
export const setActiveUser = (data) => {
  return {
    type: 'SET_ACTIVE_USER',
    data
  }
}


export const removeFavoriteMovie = (data) => {
  return {
    type: 'REMOVE_FAVORITE',
    data
  }
}

export const removeActiveUser = (data) => {
  return {
    type: 'REMOVE_ACTIVE_USER',
    data
  }
}