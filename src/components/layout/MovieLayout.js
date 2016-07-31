import React from 'react';
import MovieFilter from '../views/MovieFilter';
import MovieList from '../views/MovieList';

import './MovieLayout.scss';

class MovieLayout extends React.Component {
  static propTypes = {
    genres: React.PropTypes.array,
    movies: React.PropTypes.array,
    filterByGenre: React.PropTypes.func
  };

  render() {
    return (
      <div className='MovieLayout'>
          <MovieFilter genres={this.props.genres} filterByGenre={this.props.filterByGenre}/>
          <MovieList movies={this.props.movies}/>
      </div>
    );
  }
}

export default MovieLayout;
