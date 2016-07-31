import {combineReducers} from 'redux';

// Reducers
import MoviesReducer from './MoviesReducer';

// Combine Reducers
var reducers = combineReducers({
  moviesState: MoviesReducer
});

export default reducers;
