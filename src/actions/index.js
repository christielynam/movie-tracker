export const addRecentMovies = (data) => {
  return {
    type: 'ADD_MOVIES',
    data
  }
}

export const removeAllIsFavorited = () => {
  return {
    type: 'RESET_FAVORITES'
  }
}

export const resetFavCounter = () => {
  return {
    type: 'RESET_FAV_COUNTER'
  }
}

export const fetchFavoriteMovies = (data) => {
  return {
    type: 'FETCH_FAVORITES',
    data
  }
}

export const showFavoriteMovies = (data) => {
  return {
    type: 'SHOW_FAVORITES',
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

export const setFavCount = (data) => {
  return {
    type: 'SET_FAVORITE_COUNTER',
    data
  }
}

export const increaseFavCount = () => {
  return {
    type: 'INCREASE_FAVORITE_COUNTER'
  }
}

export const decreaseFavCount = () => {
  return {
    type: 'DECREASE_FAVOIRTE_COUNTER'
  }
}
