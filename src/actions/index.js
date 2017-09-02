import { RNS_SHOW_NOTIFICATION, RNS_HIDE_NOTIFICATION, RNS_REMOVE_ALL_NOTIFICATIONS } from './const';


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





//Example opts
// {
//   title: 'Hey, it\'s good to see you!',
//   message: 'Now you can see how easy it is to use notifications in React!',
//   position: 'tr',
//   autoDismiss: 0,
//   action: {
//     label: 'Awesome!',
//     callback: function() {
//       console.log('Clicked');
//     }
//   }
// }

const show = (opts = {}, level = 'success') => {
  return {
    type: RNS_SHOW_NOTIFICATION,
    ...opts,
    uid: opts.uid || Date.now(),
    level
  };
}

export const success = (opts) => {
  return show(opts, 'success');
}

export const error = (opts) => {
  return show(opts, 'error');
}

export const warning = (opts) => {
  return show(opts, 'warning');
}

export const info = (opts) => {
  return show(opts, 'info');
}

export const hide = (uid) => {
  return {
    type: RNS_HIDE_NOTIFICATION,
    uid
  };
}

export const removeAll = () => {
  return { type: RNS_REMOVE_ALL_NOTIFICATIONS };
}