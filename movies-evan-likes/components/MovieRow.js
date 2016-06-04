import React from 'react';

const MovieRow = (props) => (
  <tr>
    <td>{props.data.title}</td>
    <td>{props.data.year}</td>
    <td>{props.data.wonBestPicture}</td>
    <td>{props.data.genre}</td>
  </tr>
);

export default MovieRow;
