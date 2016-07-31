/*eslint-env node, mocha*/
/*global expect*/
/*eslint no-console: 0*/
'use strict';

import reducer from '../../src/reducers/MoviesReducer';
import {LOAD_MOVIES,FILTER_BY_GENRE} from '../../src/actions/MovieActionCreators';

describe('Movie Reducer', () => {


  it('should return the initial state', () => {
    let initial = reducer(undefined, {});
    expect(initial).to.be.defined;
  });

  describe('loading movies ', () => {
    it('should handle LOAD_MOVIES with no movies', () => {
      let state = reducer(undefined, {
        type: LOAD_MOVIES,
        value: undefined
      });
      expect(state).to.deep.equal({
        allMovies: undefined,
        movies: undefined,
        genres: []
      });
    });

    it('should handle LOAD_MOVIES with 2 movies', () => {
      let movieList =
        [
          {'rating': 8.8, 'genres': ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'], 'rated': 'PG', 'language': ['English'], 'title': 'Star Wars'},
          {'rating': 8.1, 'genres': ['Animation', 'Adventure', 'Comedy', 'Family'], 'rated': 'G', 'language': ['English'], 'title': 'Finding Nemo'}
        ];
      let state = reducer(undefined, {
        type: LOAD_MOVIES,
        value: movieList
      });
      expect(state.movies).to.deep.equal(movieList);
      expect(state.genres).to.deep.equal(
        ['Action', 'Adventure', 'Fantasy', 'Sci-Fi', 'Animation', 'Comedy', 'Family']
      );
    });
  });

  describe('filtering  movies ', () => {
    let loadedState, movieList, genres = undefined;

    beforeEach(() => {
      movieList =
        [
          {'rating': 8.8, 'genres': ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'], 'rated': 'PG', 'language': ['English'], 'title': 'Star Wars'},
          {'rating': 8.1, 'genres': ['Animation', 'Adventure', 'Comedy', 'Family'], 'rated': 'G', 'language': ['English'], 'title': 'Finding Nemo'}
        ];
      genres = ['Action', 'Adventure', 'Fantasy', 'Sci-Fi', 'Animation', 'Comedy', 'Family']

      loadedState = reducer(undefined, {
        type: LOAD_MOVIES,
        value: movieList
      });
    });

    describe('when null genre ', () => {
      it('should return with no movies', () => {

        let state = reducer(loadedState, {
          type: FILTER_BY_GENRE,
          genre: undefined
        });
        expect(state).to.deep.equal({
          allMovies: movieList,
          movies: [],
          genres: genres
        });
      });
    });

    describe('when genre is in one movie', () => {
      it('should return with one movie', () => {
        let state = reducer(loadedState, {
          type: FILTER_BY_GENRE,
          movies: movieList,
          genre: 'Animation'
        });
        expect(state).to.deep.equal({
          allMovies: movieList,
          movies: [{'rating': 8.1, 'genres': ['Animation', 'Adventure', 'Comedy', 'Family'], 'rated': 'G', 'language': ['English'], 'title': 'Finding Nemo'}],
          genres: genres
        });
      });
    });

    describe('when genre is in both movies', () => {
      it('should return with both movies', () => {
        let movieList =
          [
            {'rating': 8.8, 'genres': ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'], 'rated': 'PG', 'language': ['English'], 'title': 'Star Wars'},
            {'rating': 8.1, 'genres': ['Animation', 'Adventure', 'Comedy', 'Family'], 'rated': 'G', 'language': ['English'], 'title': 'Finding Nemo'}
          ];
        let state = reducer(loadedState, {
          type: FILTER_BY_GENRE,
          genre: 'Adventure'
        });
        expect(state).to.deep.equal({
          allMovies: movieList,
          movies: movieList,
          genres: genres
        });
      });
    });
    describe('when genre is all', () => {
      it('should return with both movies', () => {
        let movieList =
          [
            {
              'rating': 8.8,
              'genres': ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
              'rated': 'PG',
              'language': ['English'],
              'title': 'Star Wars'
            },
            {
              'rating': 8.1,
              'genres': ['Animation', 'Adventure', 'Comedy', 'Family'],
              'rated': 'G',
              'language': ['English'],
              'title': 'Finding Nemo'
            }
          ];
        let state = reducer(loadedState, {
          type: FILTER_BY_GENRE,
          genre: 'All'
        });
        expect(state).to.deep.equal({
          allMovies: movieList,
          movies: movieList,
          genres: genres
        });
      });
    });
  });
});


