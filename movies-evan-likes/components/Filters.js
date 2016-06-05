import React, { Component } from 'react';
import GenreFilter from './GenreFilter';
import WonBestPicture from './WonBestPicture.js';
import SearchBar from './SearchBar.js';

export default class Filters extends Component {
  constructor(props) {
    super();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <GenreFilter />
            <SearchBar />
            <WonBestPicture />
            <button>Filter</button>
          </fieldset>
        </form>
      </div>
    );
  }

}
