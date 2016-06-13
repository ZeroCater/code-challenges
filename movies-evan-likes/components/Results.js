import React, { Component } from 'react';
import MovieRow from './MovieRow';

export default class Results extends Component {
  constructor(props) {
    super();
  }

  render() {
    let rows = [];
    let filteredState = {};

    // Captures the current state if different than initial state
    // ===========================================================
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

    // Iterates over movies in data set and renders all movies or checks against filteredState for rendering
    // =====================================================================================================
    this.props.data.forEach(movie => {
      // If no filters exist in filteredState, render all the movies
      if (Object.keys(filteredState).length === 0) {
        rows.push(movie);
      // Otherwise, check the movie against the filteredState object
      // Skip movies where a key and value does not match
      } else {
        for (var key in filteredState) {
          // Separates decade and searchText due to special cases / property names that need to be checked for
          if (key === 'decade' || key === 'searchText') {
            if (key === 'decade') {
              if ((Math.floor(movie.year / 10) * 10) !== Number(filteredState[key])) {
                return;
              }
            }
            if (key === 'searchText') {
              let lowerMovieTitle = movie.title.toLowerCase();
              let lowerSearchText = filteredState[key].toLowerCase();
              if (lowerMovieTitle.indexOf(lowerSearchText) === -1) {
                return;
              }
            }
          // The rest of the filters have the same key value naming. Checks for eqaulity with movies.
          } else {
            if (movie[key] !== filteredState[key]) {
              return;
            }
          }
        }
        // If the movie made it through all the filtered checks above then add it to the rows array
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
