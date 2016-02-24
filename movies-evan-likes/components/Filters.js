import React, { Component } from 'react';

export default class Filters extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          Put the filter controls here
          <button>Filter</button>
        </fieldset>
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
  }
}
