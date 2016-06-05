import React, { Component } from 'react';
import MovieRow from './MovieRow';

export default class Results extends Component {
  constructor(props) {
    super();
  }

  render() {
    let rows = this.props.data.map(movie => {
      return <MovieRow key={movie.title} data={movie} />;
    });

    return (
      <table>
        <tr>
          <th>Movie Title</th>
          <th>Year</th>
          <th>Won Best Picture</th>
          <th>Genre</th>
        </tr>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
