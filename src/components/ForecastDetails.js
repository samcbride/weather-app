import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ForecastDetails = ({ forecast }) => {
  const { date, humidity, temperature, wind } = forecast;
  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        {moment(date).format("ddd do MMM")}
      </div>
      <div className="forecast-details__max-temperature">
        Max Temperature:
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__min-temperature">
        Min temperature:
        {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details__humidity">
        Humidity:
        {humidity}
      </div>
      <div className="forecast-details__wind-speed">
        Wind speed:
        {wind.speed}
      </div>
      <div className="forecast-details__wind-direction">
        Wind direction:
        {wind.direction}
      </div>
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
