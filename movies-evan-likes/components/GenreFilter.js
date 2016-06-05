import React, { Component } from 'react';

export default class GenreFilter extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="genre-selector">
        <select>
          <option value="1">A Movie</option>
          <option value="2">Another Movie</option>
        </select>
      </div>
    );
  }
}
