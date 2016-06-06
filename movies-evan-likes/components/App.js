import React, { Component } from 'react';
import Filters from './Filters';
import Results from './Results';
import data from '../data';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bestPicture: false,
      genre: 'null',
    };
    this.setFilteredResults = this.setFilteredResults.bind(this);
  }

  setFilteredResults(searchTextInput, bestPictureInput, genreInput) {
    this.setState({
      searchText: searchTextInput,
      bestPicture: bestPictureInput,
      genre: genreInput,
    });
  }

  render() {
    return (
      <div>
        <h1>Movies Evan Likes!</h1>
        <Filters
          setFilteredResults={this.setFilteredResults}
          data={data}
        />
        <Results
          searchText={this.state.searchText}
          bestPicture={this.state.bestPicture}
          genre={this.state.genre}
          data={data}
        />
      </div>
    );
  }
}
