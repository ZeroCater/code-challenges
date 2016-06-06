import React, { Component } from 'react';

export default class GenreFilter extends Component {
  constructor(props) {
    super();
  }

  render() {
    let options = [];

    this.props.data.forEach(movie => {
      if (options.indexOf(movie.genre) === -1) {
        options.push(movie.genre);
      }
    });

    return (
      <div className="genre-selector">
        <select>
          <option key="all" value="all">all</option>
          {options.map(genre => <option key={genre} value={genre}>{genre}</option>)}
        </select>
      </div>
    );
  }
}
