import { useState, useEffect } from "react";
import axios from "axios";
import WeatherItem from "../WeatherList/WeatherItem/WeatherItem";
const apiKey = import.meta.env.VITE_API_KEY;

const WeatherList = () => {
  
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    if (city) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiKey}`);
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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="city" placeholder="Enter a city" />
        <button type="submit">Search</button>
      </form>

      {weatherData.length > 0 ? (
        weatherData.map((item, index) => <WeatherItem key={index} item={item} />)
      ) : 
      (<p>No weather data available.</p>)
      }
    </div>
  );
};

export default WeatherList;
