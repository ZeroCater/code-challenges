import React, { Component } from 'react';
import Filters from './Filters';
import Results from './Results';
import data from '../data';

export default class App extends Component {
  constructor() {
    super();
    console.log('STATE', this.state);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.state = {
      searchText: '',
      bestPicture: false,
      genre: 'null',
    };
  }

  handleUserInput(searchTextInput, bestPictureInput, genreInput) {
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
          searchText={this.state.searchText}
          bestPicture={this.state.bestPicture}
          genre={this.state.genre}
          onUserInput={this.handleUserInput}
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
