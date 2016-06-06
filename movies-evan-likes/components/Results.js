import React, { Component } from 'react';
import MovieRow from './MovieRow';

export default class Results extends Component {
  constructor(props) {
    super();
  }

  render() {
    let rows = [];

    // If the filtered state is unchanged, render all the movies
    // Otherwise, compare the movie to the props values and push to rows array
    
    if ((this.props.genre === 'null') && !this.props.bestpicture && (this.props.searchText.length < 1)) {
      this.props.data.forEach(movie => {
        rows.push(movie);
      });
    } else {
      this.props.data.forEach(movie => {
        if (movie.genre === this.props.genre) {
          rows.push(movie);
        }
        if (movie.title.indexOf(this.props.searchText) !== -1) {
          rows.push(movie);
        }
        if (movie.wonBestPicture === this.props.bestPicture) {
          rows.push(movie);
        }
      });
    }
    // Go through each movie and check if any of the filters apply before adding to the rows array


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
