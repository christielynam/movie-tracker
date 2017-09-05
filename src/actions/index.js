
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






// const show = (opts = {}, level = 'success') => {
//   // console.log('SHOW NOTIFY IN ACTION', opts)
//   return {
//     type: RNS_SHOW_NOTIFICATION,
//     ...opts,
//     uid: opts.uid || Date.now(),
//     level
//   };
// }

// export const success = (opts) => {
//   return show(opts, 'success');
// }

// export const error = (opts) => {
//   return show(opts, 'error');
// }

// export const warning = (opts) => {
//   return show(opts, 'warning');
// }

// export const info = (opts) => {
//   return show(opts, 'info');
// }

// export const hide = (uid) => {
//   return {
//     type: RNS_HIDE_NOTIFICATION,
//     uid
//   };
// }

// export const removeAll = () => {
//   return { type: RNS_REMOVE_ALL_NOTIFICATIONS };
// }
