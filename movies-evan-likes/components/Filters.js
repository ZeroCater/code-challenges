import React, { Component } from 'react';
import GenreFilter from './GenreFilter';
import WonBestPicture from './WonBestPicture.js';
import SearchBar from './SearchBar.js';

export default class Filters extends Component {
  constructor(props) {
    super();
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.setFilteredResults(this.state.searchText, this.state.bestPicture, this.state.genre);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <GenreFilter
              searchText={this.state.searchText}
              bestPicture={this.state.bestPicture}
              genre={this.state.genre}
              onUserInput={this.handleUserInput}
              data={this.props.data}
            />
            <SearchBar
              searchText={this.state.searchText}
              onUserInput={this.state.handleUserInput}
            />
            <WonBestPicture
              searchText={this.state.searchText}
              bestPicture={this.state.bestPicture}
              genre={this.state.genre}
              onUserInput={this.handleUserInput}
            />
            <button>Filter</button>
          </fieldset>
        </form>
      </div>
    );
  }

}
