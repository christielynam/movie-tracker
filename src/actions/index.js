export const addRecentMovies = (data) => {
  return {
    type: 'ADD_MOVIES',
    data
  }
}

export const addFavoriteMovies = (data) => {
  return {
    type: 'ADD_FAVORITE',
    data
  }
}

export const removeFavoriteMovie = (data) => {
  return {
    type: 'REMOVE_FAVORITE',
    data
  }
}