import React from "react";
import { Brewery } from "./Brewery";
import { Pin } from "./Pin";

export const Breweries = (props) => {
  if (!props.breweries) {
    return <h2>No breweries found</h2>;
  }

  return (
    <div>
      <Pin />
      <ul>
        {props.breweries.map((brewery) => (
          <Brewery
            key={brewery.id}
            id={brewery.id}
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
    </div>
  );
};
