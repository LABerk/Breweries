import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const BreweryDetails = () => {
  const params = useParams();
  console.log("params", params);

  const [breweryName, setBreweryName] = useState("");
  const [brewerySt, setBrewerySt] = useState("");
  const [breweryCity, setBreweryCity] = useState("");
  const [breweryState, setBreweryState] = useState("");
  const [breweryZip, setBreweryZip] = useState("");
  //MAP state

  useEffect(() => {
    const fetchBrewery = async () => {
      try {
        const queryName = await params.name.replaceAll(" ", "_");
        const response = await fetch(
          `https://api.openbrewerydb.org/breweries?by_name=${queryName}&per_page=1`
        );
        const json = await response.json();
        setBreweryName(json[0].name);
        setBrewerySt(json[0].street);
        setBreweryCity(json[0].city);
        setBreweryState(json[0].state);
        setBreweryZip(json[0].zip);
      } catch (err) {
        console.log("There was a problem fetching brewery data", err);
      }
    };

    fetchBrewery();
  }, [params.name, breweryName]);

  return (
    <div>
      <h2>{breweryName}</h2>
      <h3>{brewerySt}</h3>
      <h3>{breweryCity}</h3>
      <h3>{breweryState}</h3>
      <h3>{breweryZip}</h3>

      <Link to="/">Back to all Breweries</Link>
    </div>
  );
};
