import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movies from './movies-reducer';
import account from './account-reducer'

const rootReducer = combineReducers({
  movies,
  account,
  router: routerReducer
})

export default rootReducer;
