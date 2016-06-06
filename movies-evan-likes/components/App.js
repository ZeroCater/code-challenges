import React, { Component } from 'react';
import Filters from './Filters';
import Results from './Results';
import data from '../data';

export default class App extends Component {
  constructor() {
    super();
    this.handleUserInput = this.handleUserInput.bind(this);
    this.state = {
      searchText: '',
      bestPicture: false,
      genre: null,
    };
  }

  handleUserInput(searchTextInput, bestPictureInput) {
    console.log('Best Picture?', bestPictureInput);
    this.setState({
      searchText: searchTextInput,
      bestPicture: bestPictureInput,
    });
  }

  render() {
    return (
      <div>
        <h1>Movies Evan Likes!</h1>
        <Filters
          searchText={this.state.searchText}
          bestPicture={this.state.bestPicture}
          onUserInput={this.handleUserInput}
          data={data}
        />
        <Results
          searchText={this.state.searchText}
          bestPicture={this.state.bestPicture}
          data={data}
        />
      </div>
    );
  }
}
