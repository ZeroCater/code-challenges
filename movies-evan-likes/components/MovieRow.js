import React from 'react';

// JSX does not render boolean values from data set. Added ternary operator
// to render boolean as string that user can understand. Does not modify
// original data.

const MovieRow = (props) => (
  <tr>
    <td>{props.data.title}</td>
    <td>{props.data.year}</td>
    <td>{props.data.wonBestPicture ? 'yes' : 'no'}</td>
    <td>{props.data.genre}</td>
  </tr>
);

export default MovieRow;
