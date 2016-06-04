import React from 'react';

// JSX does not render boolean values from data set. Added ternary statement
// to render boolean as string.
const MovieRow = (props) => (
  <tr>
    <td>{props.data.title}</td>
    <td>{props.data.year}</td>
    <td>{props.data.wonBestPicture ? 'true' : 'false'}</td>
    <td>{props.data.genre}</td>
  </tr>
);

export default MovieRow;
