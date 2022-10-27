import React from "react";
import { Link, useParams } from "react-router-dom";

export const BreweryDetails = (props) => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h2>{params.breweryId}</h2>

      <Link to="/">Back to all Breweries</Link>
    </div>
  );
};
