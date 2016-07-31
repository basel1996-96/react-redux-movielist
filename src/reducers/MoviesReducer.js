import {
  LOAD_MOVIES,
  FILTER_BY_GENRE
} from '../actions/MovieActionCreators';

import _ from 'lodash';


let getGenres = (movies) => {
  let genres = [];
  _.map(movies, (movie) => {
    genres = _.uniq(_.concat(genres, movie.genres));
  });
  return genres;
};

let filterByGenre = (filter, movies) => {
  if (filter === 'All') {
    return movies;
  }
  return _.filter(movies, (movie) => {
    return _.indexOf(movie.genres,filter) != -1;
  });
}

const initialState = {
  allMovies: [],
  movies: [],
  genres: []
};

const MoviesReducer = function (state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES:
      return  Object.assign({}, state, {
        allMovies: action.value,
        movies: action.value,
        genres: getGenres(action.value)
    });

    case FILTER_BY_GENRE:
      return Object.assign({}, state, {
        movies: filterByGenre(action.genre, state.allMovies)
      });
  }
  return state;
};

export default MoviesReducer;
