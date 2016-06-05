import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <input type="text" placeholder="Search by title..." />
    );
  }
}
