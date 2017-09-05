const favoritesCounter = (state = 0, action) => {

  switch (action.type) {
    case 'SET_FAVORITE_COUNTER':
      return action.data;

    case 'INCREASE_FAVORITE_COUNTER':
      return state += 1;

    case 'DECREASE_FAVORITE_COUNTER':
      return state -= 1;

    case 'RESET_FAV_COUNTER':
      return 0;
      
    default:
      return state;
  }
}

export default favoritesCounter;
