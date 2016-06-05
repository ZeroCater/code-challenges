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
      bestPicture: null,
      genre: null,
    };
  }

  handleUserInput(searchTextInput) {
    this.setState({
      searchText: searchTextInput,
    });
  }

  render() {
    return (
      <div>
        <h1>Movies Evan Likes!</h1>
        <Filters searchText={this.state.searchText} onUserInput={this.handleUserInput} />
        <Results searchText={this.state.searchText} data={data} />
      </div>
    );
  }
}
