import React, { Component } from 'react';
import GenreFilter from './GenreFilter';
import WonBestPicture from './WonBestPicture';
import SearchBar from './SearchBar';
import Decade from './Decade';

export default class Filters extends Component {
  constructor(props) {
    super();
    this.state = {
      searchText: '',
      bestPicture: false,
      genre: 'null',
      decade: 'null',
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(searchTextInput, bestPictureInput, genreInput, decadeInput) {
    console.log('Changing the state', searchTextInput, bestPictureInput, genreInput);
    this.setState({
      searchText: searchTextInput,
      bestPicture: bestPictureInput,
      genre: genreInput,
      decade: decadeInput,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setFilteredResults(this.state.searchText, this.state.bestPicture, this.state.genre, this.state.decade);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <Decade 
              searchText={this.state.searchText}
              bestPicture={this.state.bestPicture}
              genre={this.state.genre}
              onUserInput={this.handleUserInput}
              data={this.props.data}
            />
            <GenreFilter
              searchText={this.state.searchText}
              bestPicture={this.state.bestPicture}
              genre={this.state.genre}
              onUserInput={this.handleUserInput}
              data={this.props.data}
            />
            <SearchBar
              searchText={this.state.searchText}
              onUserInput={this.handleUserInput}
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
