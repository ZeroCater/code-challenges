import React, { Component } from 'react';
import GenreFilter from './GenreFilter';

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
            Put the filter controls here
            <GenreFilter />
            <button>Filter</button>
          </fieldset>
        </form>
      </div>
    );
  }

}
