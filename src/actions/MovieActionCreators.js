export const LOAD_MOVIES = 'LOAD_MOVIES';
export const FILTER_BY_GENRE = 'FILTER_BY_GENRE';

export function loadMovies(value) {
  return {
    type: LOAD_MOVIES,
    value
  };
}

export function filterByGenre(genre) {
  return {
    type: FILTER_BY_GENRE,
    genre
  };
}


