import React, { Component } from 'react';

export default class GenreFilter extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="checkbox">
        <input type="checkbox" />
        Only select movies that won Best Picture
      </div>
    );
  }
}
