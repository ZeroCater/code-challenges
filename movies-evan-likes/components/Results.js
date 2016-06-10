import React, { Component } from 'react';
import MovieRow from './MovieRow';

export default class Results extends Component {
  constructor(props) {
    super();
  }

  render() {
    let rows = [];
    // let filteredMovies = [];
    // let counter = 0;

    // Get all the movie titles and store them as a key with value 0
    // let movieTitles = {};
    // this.props.data.forEach(movie => {
    //   movieTitles[movie.title] = 0;
    // });

    // Filter check to see if the a movie matches the current criteria

    this.props.data.forEach(movie => {
      if ( (this.props.searchText === '') && (this.props.bestPicture === false) && (this.props.genre === '') && (this.props.decade === '') ) {
        rows.push(movie)
      }

      if ( (movie.genre === this.props.genre) && (movie.wonBestPicture && this.props.bestPicture) && (movie.title.indexOf(this.props.searchText) !== -1) && (Math.floor(movie.year / 10) * 10) === Number(this.props.decade) ) {
        rows.push(movie);
      } 
     
      
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
