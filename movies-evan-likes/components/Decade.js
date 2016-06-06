import React, { Component } from 'react';

export default class Decade extends Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(this.props.searchText, this.props.bestPicture, this.props.genreInput, this.refs.decadeInput.value );
  }

  render() {
    let years = [];
    let decades = []

    // Loop through each movie and record their years in an object overwriting and duplicates
    this.props.data.forEach(movie => {
      if (years.indexOf(movie.year) === -1) {
        years.push(movie.year);
      }
    });

    // Loop through each of the years in the years array, and use Math.floor to calculate decade and push to decades array
    years.forEach(year => {
      let decade = decade = Math.floor(year/10)*10;
      if (decades.indexOf(decade) === -1) {
        decades.push(decade);
      }
    });

    return (
      <div className="decade-selector">
        <select ref="decadeInput" onChange={this.handleChange}>
          <option key="all" value="null">-</option>
          {options.map(genre => <option key={decades} value={decades}>{decades}</option>)}
        </select>
      </div>
    );
  }
}
