import React, { Component } from 'react';
import MovieRow from './MovieRow';

export default class Results extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log('The is the initial result render', this.props.searchText, this.props.bestPicture, this.props.genre, this.props.decade)
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

    console.log('The is after conditionals in result render', this.props.searchText, this.props.bestPicture, this.props.genre, this.props.decade)
    console.log(filteredState)

    // let filteredMovies = [];
    // let counter = 0;

    // Get all the movie titles and store them as a key with value 0
    // let movieTitles = {};
    // this.props.data.forEach(movie => {
    //   movieTitles[movie.title] = 0;
    // });

    // Filter check to see if the a movie matches the current criteria

    this.props.data.forEach(movie => {
      // console.log('This is the genre', this.props.genre)
      // If no filters exist in filteredState, render all the movies
      if (Object.keys(filteredState).length === 0) {
        rows.push(movie);
      } else {
        //rows.push(movie);
        // Otherwise, check the movie against the filteredState object and push to rows if there is a match
        for (var key in filteredState) {
          console.log('This is the filtered state', filteredState)
          if (movie[key] !== filteredState[key]) {
          // find the indexOf that movie and then splice it from that array
            return;
          }
          console.log('This is the rows array', rows);
          // let index = rows.indexOf(movie);
          // rows.splice(index, 1);
          // break;
        }
        rows.push(movie);
      }

      // Otherwise, populate rows and apply filter
    });


    // Initially all movies in movieTitles have a value of 0 so they all get rendered.
    // After changes are made to the state we push the highest numerically valued keys to the rows array for rendering
    // The highest numercially valued keys are the ones that match the most filters 
    // ===================================================================================================

    //Set the high count value
    // for (var key in movieTitles) {
    //   if (movieTitles[key] > counter) {
    //     counter = movieTitles[key];
    //   }
    // }

    // // Loop thorugh the movieTitles object and push them to a the filteredMovies array
    // for (var key in movieTitles) {
    //   if (movieTitles[key] === counter) {
    //     filteredMovies.push(key);
    //   }
    // }

    // // Loop through the data checking against the filtered movies array and push the movie objects to rows array
    // for (var i = 0; i < this.props.data.length; i++) {
    //   for (var j = 0; j < filteredMovies.length; j++) {
    //     if (this.props.data[i].title === filteredMovies[j]) {
    //       rows.push(this.props.data[i]);
    //     }
    //   }
    // }

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
