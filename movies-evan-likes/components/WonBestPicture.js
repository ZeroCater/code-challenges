import React, { Component } from 'react';

export default class WonBestPicture extends Component {
  constructor(props) {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(this.props.searchText, this.refs.bestPictureInput.checked, this.props.genre);
  }

  render() {
    return (
      <div className="checkbox">
        <input
          type="checkbox"
          checked={this.props.bestPicture}
          ref="bestPictureInput"
          onChange={this.handleChange}
        />
        Only select movies that won Best Picture
      </div>
    );
  }
}
