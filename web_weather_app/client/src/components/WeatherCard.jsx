import React from "react";

function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="wether_body">
      <h2>{weather.city}</h2>
      <img
        className="wether_icon"
        src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
        alt={weather.description}
      />
      <p className="temp">{weather.temp}°C</p>
      <p className="wether">{weather.description}</p>
      <div className="wether_info">
        <p>Humidity: {weather.humidity}%</p>
        <p>Wind Speed: {weather.windSpeed} km/h</p>
      </div>
    </div>
  );
}

export default WeatherCard;
