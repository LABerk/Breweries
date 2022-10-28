import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MapView } from "./MapView";

export const BreweryDetails = () => {
  const params = useParams();

  const [breweryName, setBreweryName] = useState("");
  const [brewerySt, setBrewerySt] = useState("");
  const [breweryCity, setBreweryCity] = useState("");
  const [breweryState, setBreweryState] = useState("");
  const [breweryZip, setBreweryZip] = useState("");
  const [breweryLat, setBreweryLat] = useState("");
  const [breweryLon, setBreweryLon] = useState("");

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
        setBreweryLat(json[0].latitude);
        setBreweryLon(json[0].longitude);
      } catch (err) {
        console.log("There was a problem fetching brewery data", err);
      }
    };

    fetchBrewery();
  }, [params.name, breweryName]);

  return (
    <div>
      <div>
        <h2>{breweryName}</h2>
        <h3>{brewerySt}</h3>
        <h3>{breweryCity}</h3>
        <h3>{breweryState}</h3>
        <h3>{breweryZip}</h3>
        <h5>{breweryLat}</h5>
        <h5>{breweryLon}</h5>
      </div>

      <div>
        <MapView lat={breweryLat} lon={breweryLon} />
      </div>
      <Link to="/">Back to all Breweries</Link>
    </div>
  );
};
