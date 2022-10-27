import React from "react";

export const Brewery = (props) => {
  return (
    <li>
      <h2>{props.name}</h2>
      <h3>{props.type}</h3>
      <h3>{props.street}</h3>
      <h3>{props.city}</h3>
      <h3>{props.state}</h3>
      <h3>{props.zip}</h3>
      <h3>{props.website}</h3>
    </li>
  );
};
