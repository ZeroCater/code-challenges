import React, { Component } from 'react';

export default class GenreFilter extends Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(this.props.searchText, this.props.bestPicture, this.refs.genreInput.value, this.props.decade);
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
        <select ref="genreInput" onChange={this.handleChange}>
          <option key="all" value="null">-</option>
          {options.map(genre => <option key={genre} value={genre}>{genre}</option>)}
        </select>
      </div>
    );
  }
}
