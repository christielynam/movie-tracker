import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from './movies-reducer';
import account from './account-reducer';
// import notifications from './notifications-reducer';
import favoritesCounter from './favoritesCounter-reducer';
import { reducer as notifications } from 'react-notification-system-redux';

const rootReducer = combineReducers({
  movies,
  account,
  favoritesCounter,
  notifications,
  router: routerReducer
})

export default rootReducer;
