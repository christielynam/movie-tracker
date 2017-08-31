export const addRecentMovies = (data) => {
  return {
    type: 'ADD_MOVIES',
    data
  }
}

export const setActiveUser = (data) => {
  return {
    type: 'SET_ACTIVE_USER',
    data
  }
}