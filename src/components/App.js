import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

const App = ({ location, forecasts }) => {
  return (
    <div className="App">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
};

export default App;
