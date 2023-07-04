import { useState, useEffect } from "react";
import axios from "axios";
import WeatherItem from "../WeatherList/WeatherItem/WeatherItem";
import "./WeatherList.css";

const apiKey = import.meta.env.VITE_API_KEY;

const WeatherList = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    if (city) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}`
          );
          const data = response.data;
          setWeatherData(data.list);
        } catch (error) {
          console.error("Error:", error);
        }
      };
      fetchData();
    }
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.city.value);
  };

  return (
    <div className="weather-list-container">
      <form onSubmit={handleSubmit} className="weather-list-form">
        <input
          type="text"
          name="city"
          placeholder="Enter a city"
          className="weather-list-input"
        />
        <button type="submit" className="weather-list-button">
          Search
        </button>
      </form>

      {weatherData && (
        <h2 className="weather-list-location">
          Location: {weatherData.city && weatherData.city.name}
        </h2>
      )}

      {weatherData.length > 0 ? (
        weatherData.slice(0, 5).map((item, index) => (
          <WeatherItem key={index} item={item} />
        ))
      ) : (
        <p className="weather-list-no-data">No weather data available.</p>
      )}
    </div>
  );
};

export default WeatherList;
