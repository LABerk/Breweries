import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Breweries } from "./components/Breweries";
import { BreweryDetails } from "./components/BreweryDetails";

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
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Breweries breweries={breweries} />} />
          <Route
            path="/brewerydetails/:breweryId"
            element={<BreweryDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
