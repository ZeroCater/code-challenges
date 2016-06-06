import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(this.refs.searchTextInput.value);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search by title..."
        ref="searchTextInput"
        onChange={this.handleChange}
      />
    );
  }
}
