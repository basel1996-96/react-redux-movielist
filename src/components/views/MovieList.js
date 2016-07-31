import React from 'react';
import './MovieList.scss';

export default class MovieList extends React.Component {
  static propTypes = {
    movies: React.PropTypes.array
  };

  render() {
    return (
      <div className='MovieList'>
        {(() => {
          let movies = this.props.movies;
          if (movies) {
            let items = [];

            movies.map((movie, index) => {
              items.push(<div className='item' key={index}>{movie.title}</div>);
            });

            return (
              <div className='list'>{items}</div>
            );
          }
        })()}
      </div>
    );
  }
}
