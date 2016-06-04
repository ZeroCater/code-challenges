import React, { Component } from 'react';
import MovieRow from './MovieRow';

export default class Results extends Component {
  render() {
    const { data } = this.props;
    let rows = this.props.data.map(movie => {
      return <MovieRow data={movie} />;
    });

    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
