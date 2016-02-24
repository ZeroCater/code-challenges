import React, { Component } from 'react';
import Filters from './Filters';
import Results from './Results';
import data from '../data';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Movies Evan Likes!</h1>
        <Filters />
        <Results data={data} />
      </div>
    );
  }
}
