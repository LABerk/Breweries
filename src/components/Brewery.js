import React from "react";
import { Link } from "react-router-dom";

export const Brewery = (props) => {
  const externalLinkHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <Link to={`/brewerydetails/${props.id}`}>
      <h2>{props.name}</h2>
      <h3>{props.type}</h3>
      <h3>{props.street}</h3>
      <h3>{props.city}</h3>
      <h3>{props.state}</h3>
      <h3>{props.zip}</h3>
      <a
        onClick={externalLinkHandler}
        href={props.website}
        target="_blank"
        rel="noreferrer"
      >
        {props.website}
      </a>
    </Link>
  );
};
