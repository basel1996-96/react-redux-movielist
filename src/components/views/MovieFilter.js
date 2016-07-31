import React from 'react';
import './MovieFilter.scss';

export default class MovieFilter extends React.Component {
  static propTypes = {
    genres: React.PropTypes.array,
    filterByGenre: React.PropTypes.func
  };

  filterByGenre(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.filterByGenre(this.refs.genre.value);
  }

  render() {
    return (
      <div className='MovieFilter'>
        <label>Movie Genre:</label>

        {(() => {
          let genres = this.props.genres;
          if (genres) {
            let items = [];
            items.push(<option key={0} value='All'>All</option>);
            genres.map((genre, index) => {
              items.push(<option key={index+1} value={genre}>{genre}</option>);
            });

            return (
              <select className='genreSelect' ref='genre' onChange={this.filterByGenre.bind(this)}>{items}</select>
            );
          }
        })()}

      </div>
    );
  }
}
