import React, { Component } from 'react';
import Filters from './Filters';
import Results from './Results';
import data from '../data';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: data,
    };
  }

  render() {
    return (
      <div>
        <h1>Movies Evan Likes!</h1>
        <Filters />
        <Results data={this.state.movies} />
      </div>
    );
  }
}
