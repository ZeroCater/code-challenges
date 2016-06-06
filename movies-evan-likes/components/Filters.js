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
            <GenreFilter data={this.props.data} />
            <SearchBar searchText={this.props.searchText} onUserInput={this.props.onUserInput} />
            <WonBestPicture
              searchText={this.props.searchText}
              bestPicture={this.props.bestPicture}
              onUserInput={this.props.onUserInput}
            />
            <button>Filter</button>
          </fieldset>
        </form>
      </div>
    );
  }

}
