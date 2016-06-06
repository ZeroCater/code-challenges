import React, { Component } from 'react';
import MovieRow from './MovieRow';

export default class Results extends Component {
  constructor(props) {
    super();
  }

  render() {
    let rows = [];

    // create conditional that checks if any of the intial values are different, if so, proceed with filter, if not, render all

    if ((this.props.genre === 'null') && !this.props.bestpicture && (this.props.searchText.length < 1)) {
      this.props.data.forEach(movie => {
        rows.push(movie);
      });
    }

      // if ((this.props.genre !== 'null') && (movie.genre !== this.props.genre)) {
      //   return;
      // }
      
      // if (!movie.wonBestPicture && this.props.bestPicture) {
      //   return;
      // }
      
      // if (movie.title.indexOf(this.props.searchText) === -1) {
      //   return;
      // }


      // if (rows.indexOf(movie) === -1) {

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
