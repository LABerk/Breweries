import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [breweries, setBreweries] = useState();

  useEffect(() => {
    const apiUrl =
      "https://api.openbrewerydb.org/breweries?by_city=milwaukee&per_page=5";
    const fetchBreweries = async () => {
      try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        console.log(json);
        setBreweries(json);
      } catch (err) {
        console.log("There was a problem fetching brewery data", err);
      }
    };

    fetchBreweries();
  }, []);
  return (
    <div className="App">
      <p>
        {!breweries
          ? "Looking for breweries..."
          : breweries.map((brewery) => brewery.name)}
      </p>
    </div>
  );
}

export default App;
