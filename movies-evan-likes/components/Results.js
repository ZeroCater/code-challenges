import React, { Component } from 'react';
import MovieRow from './MovieRow';

export default class Results extends Component {
  constructor(props) {
    super();
  }

  render() {
    let rows = [];
    let filteredState = {};

    // Capture the changed state properties and values into filteredState
    if (this.props.searchText !== '') {
      filteredState['searchText'] = this.props.searchText;
    }

    if (this.props.bestPicture) {
      filteredState['wonBestPicture'] = this.props.bestPicture;
    }

    if (this.props.genre !== 'null') {
      filteredState['genre'] = this.props.genre;
    }

    if (this.props.decade !== 'null') {
      filteredState['decade'] = this.props.decade;
    }

    this.props.data.forEach(movie => {
      // If no filters exist in filteredState, render all the movies
      if (Object.keys(filteredState).length === 0) {
        rows.push(movie);
      // Otherwise, check the movie against the filteredState object and push to rows aray if all the key value pairs match
      } else {
        for (var key in filteredState) {
          if (key === 'decade') {
            if ((Math.floor(movie.year / 10) * 10) != filteredState[key]) {
              return;
            }
          } else {
            if (movie[key] !== filteredState[key]) {
              return;
            }
          }
        }
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
        <tbody>{rows.map((movie, i) => <MovieRow key={i} data={movie} />)}</tbody>
      </table>
    );
  }
}
