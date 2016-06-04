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
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
