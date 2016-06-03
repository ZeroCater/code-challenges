import React, { Component } from 'react';

export default class Results extends Component {
  render() {
    const { data } = this.props;

    return (
      <table>
        {this.props.data.map(movie =>
          <tr key={movie.title}> {movie.title} </tr>
        )}
      </table>
    );
  }
}
