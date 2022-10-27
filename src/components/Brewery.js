import React from "react";

export const Brewery = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.type}</h3>
      <h3>{props.street}</h3>
      <h3>{props.city}</h3>
      <h3>{props.state}</h3>
      <h3>{props.zip}</h3>
      <a href={props.website} target="_blank" rel="noreferrer">
        {props.website}
      </a>
    </div>
  );
};
