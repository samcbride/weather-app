import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

const ForecastSummaries = ({ forecasts }) => {
  const { date, temperature, description, icon } = forecasts;
  return (
    <div className="ForecastSummary">
      <ForecastSummary
        date={date}
        temperature={temperature}
        description={description}
        icon={icon}
      />
    </div>
  );
};

ForecastSummaries.propTypes = {
  forecasts: PropTypes.shape([
    {
      date: PropTypes.number,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }).isRequired,
      wind: PropTypes.shape({
        speed: PropTypes.number,
        direction: PropTypes.string,
      }).isRequired,
      humidity: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
    },
  ]).isRequired,
};

export default ForecastSummaries;
