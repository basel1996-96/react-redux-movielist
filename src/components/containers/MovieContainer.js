import React from 'react';
import {connect} from 'react-redux';
import store from '../../stores/store';
import {loadMovies, filterByGenre} from '../../actions/MovieActionCreators';
import MovieLayout from '../layout/MovieLayout';
import 'normalize.css/normalize.css';

import movieFile from '../../data/movies.json';

class MovieContainer extends React.Component {


  componentDidMount() {
    store.dispatch(loadMovies(movieFile));
  }

  filterByGenre(genre) {
    store.dispatch(filterByGenre(genre));
  }

  render() {
    return (
      <MovieLayout
        movies={this.props.movies}
        genres={this.props.genres}
        filterByGenre={this.filterByGenre}
        {...this.props}>
      </MovieLayout>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    movies: store.moviesState.movies,
    genres: store.moviesState.genres
  };
};

export default connect(mapStateToProps)(MovieContainer);
