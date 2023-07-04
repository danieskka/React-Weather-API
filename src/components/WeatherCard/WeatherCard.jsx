import { useEffect, useState } from "react";
import "./WeatherCard.css";

const apiKey = import.meta.env.VITE_API_KEY;

const WeatherCard = () => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=Madrid&APPID=${apiKey}`
      );
      const data = await response.json();
      setWeather(data);
    };
    getWeather();
  }, []);

  return (
    <div className="weather-card-container">
      <h2 className="weather-card-location">
        Location: {weather.city && weather.city.name}
      </h2>
      {weather.list &&
        weather.list.slice(0, 3).map((item, index) => (
          <div key={index} className="weather-card-item">
            <h4>Date/time: {item.dt_txt}</h4>
            <p>Rain: {item.weather && item.weather[0].description}</p>
            <p>Wind: {item.wind && item.wind.speed} speed</p>
            <p>Temperature: {item.main && item.main.temp}</p>
          </div>
        ))}
    </div>
  );
};

export default WeatherCard;

