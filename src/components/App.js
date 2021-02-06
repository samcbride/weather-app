import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummary";

const App = ({ location, forecasts }) => {
  const { city, country } = location;
  const { date, description, icon, temperature } = forecasts[1];
  return (
    <div className="App">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries
        date={date}
        description={description}
        icon={icon}
        temperature={temperature}
      />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  forecasts: PropTypes.shape([
    {
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }).isRequired,
      // wind: PropTypes.shape({
      //   speed: PropTypes.number,
      //   direction: PropTypes.string,
      // }).isRequired,
      // humidity: PropTypes.number,
    },
  ]).isRequired,
};

export default App;
