import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

const App = ({ location, forecasts }) => {
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
      <ForecastDetails forecast={forecasts[0]} />
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
  // forecast: PropTypes.shape({
  //   date: PropTypes.number.isRequired,
  //   temperature: PropTypes.shape({
  //     max: PropTypes.number,
  //     min: PropTypes.number,
  //   }).isRequired,
  //   humidity: PropTypes.number.isRequired,
  //   wind: PropTypes.shape({
  //     speed: PropTypes.number,
  //     direction: PropTypes.string,
  //   }).isRequired,
  // }).isRequired,
};

export default App;
