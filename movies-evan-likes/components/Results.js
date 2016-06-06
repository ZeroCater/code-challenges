import React, { Component } from 'react';
import MovieRow from './MovieRow';

export default class Results extends Component {
  constructor(props) {
    super();
  }

  render() {
    let rows = [];
    let filteredMovies = [];
    let counter = 0;

    // Get all the movie titles since they are unique and store them as the key with value 0
    let movieTitles = {};
    this.props.data.forEach(movie => {
      movieTitles[movie.title] = 0;
    });
    
    // If the filtered state is unchanged, render all the movies
    // Otherwise, compare the movie to the props values and push to rows array
    // =======================================================================
    if ((this.props.genre === 'null') && !this.props.bestPicture && (this.props.searchText.length < 1)) {
      this.props.data.forEach(movie => {
        rows.push(movie);
      });
    } else {
      this.props.data.forEach(movie => {
        if (movie.genre === this.props.genre) {
          movieTitles[movie.title] += 1;
        }
      });
      this.props.data.forEach(movie => {
        if (movie.wonBestPicture === this.props.bestPicture) {
          movieTitles[movie.title] += 1;
        }
      });
      this.props.data.forEach(movie => {
        if (movie.title === this.props.searchText) {
          movieTitles[movie.title] += 1;
        }
      });
    }

    // Find the movies with the highest values. These are the movies with the most filtered matches.
    // =============================================================================================

    //Set the high count value
    for (var key in movieTitles) {
      if (movieTitles[key] > counter) {
        counter = movieTitles[key];
      }
    }

    // Loop thorugh the movieTitles array and push them to a the filteredMovies array
    for (var key in movieTitles) {
      if (movieTitles[key] === counter) {
        filteredMovies.push(key);
      }
    }

    // Loop through the data checking against the filtered movies array and push the movie objects to rows array
    for (var i = 0; i < this.props.data.length; i++) {
      for (var j = 0; j < filteredMovies.length; j++) {
        if (this.props.data[i].title === filteredMovies[j]) {
          rows.push(this.props.data[i]);
        }
      }
    }

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
