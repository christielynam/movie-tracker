import { combineReducers } from 'redux';
import movies from './movies-reducer';

const rootReducer = combineReducers({
  movies
})

export default rootReducer;
