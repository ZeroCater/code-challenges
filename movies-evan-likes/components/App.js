import React, { Component } from 'react';
import Filters from './Filters';
import Results from './Results';
import data from '../data';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bestPicture: '',
      genre: '',
      decade: '',
    };
    this.setFilteredResults = this.setFilteredResults.bind(this);
  }

  setFilteredResults(searchTextInput, bestPictureInput, genreInput, decadeInput) {
    this.setState({
      searchText: searchTextInput,
      bestPicture: bestPictureInput,
      genre: genreInput,
      decade: decadeInput,
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
          decade={this.state.decade}
          data={data}
        />
      </div>
    );
  }
}
