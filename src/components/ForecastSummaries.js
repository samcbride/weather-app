import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";

const ForecastSummaries = ({ forecasts, onForecastSelect }) => (
  <div className="forecast-summaries">
    {forecasts.map((forecast) => (
      <ForecastSummary
        key={forecast.date}
        date={forecast.date}
        description={forecast.description}
        icon={forecast.icon}
        temperature={forecast.temperature}
        onSelect={onForecastSelect}
      />
    ))}
  </div>
);

export default ForecastSummaries;

ForecastSummaries.propTypes = {
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
  onForecastSelect: PropTypes.func.isRequired,
};
