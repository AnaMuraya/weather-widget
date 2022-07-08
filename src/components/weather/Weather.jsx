import React from "react";

const Weather = ({ weatherData }) => {
  return (
    <div>
      <div>
        <div>City: {weatherData.name}</div>
        <div>Temperature: {weatherData.main.temp}</div>
        <div>Sunrise: {weatherData.sys.sunrise}</div>
        <div>Sunset: {weatherData.sys.sunset}</div>
        <div>Description: {weatherData.weather[0].description}</div>
      </div>
    </div>
  );
};

export default Weather;
