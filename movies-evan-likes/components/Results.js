import React, { Component } from 'react';
import MovieRow from './MovieRow';

export default class Results extends Component {
  constructor(props) {
    super();
  }

  render() {
    let rows = [];
    this.props.data.forEach(movie => {

      if ((this.props.genre !== 'null') && (movie.genre !== this.props.genre)) {
        return;
      }
      
      if (!movie.wonBestPicture && this.props.bestPicture) {
        return;
      }
      
      if (movie.title.indexOf(this.props.searchText) === -1) {
        return;
      }


      if (rows.indexOf(movie) === -1) {
        rows.push(movie);
      }
    });

    return (
      <table>
        <tbody>
          <tr>
            <th>Movie Title</th>
            <th>Year</th>
            <th>Won Best Picture</th>
            <th>Genre</th>
          </tr>
        </tbody>
        <tbody>{rows.map(movie => <MovieRow key={movie.title} data={movie} />)}</tbody>
      </table>
    );
  }
}
