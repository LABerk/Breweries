import React from "react";
import { Brewery } from "./Brewery";

export const Breweries = (props) => {
  if (!props.breweries) {
    return <h2>No breweries found</h2>;
  }

  return (
    <ul>
      {props.breweries.map((brewery) => (
        <Brewery
          key={brewery.id}
          name={brewery.name}
          type={brewery.brewery_type}
          street={brewery.street}
          city={brewery.city}
          state={brewery.state}
          zip={brewery.postal_code}
          website={brewery.website_url}
        />
      ))}
    </ul>
  );
};
