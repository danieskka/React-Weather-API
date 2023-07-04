import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import WeatherList from "../WeatherList";
import WeatherCard from "../WeatherCard/WeatherCard";


const Main = () => {
  const [city, setCity] = useState("Madrid");

  const handleCityChange = (newCity) => {
    setCity(newCity);
  };

  return (
    
      <Routes>
        <Route
          path="/"
          element= {
            <div>
              <WeatherCard city={city} />
              <WeatherList city={city} onCityChange={handleCityChange} />
            </div>
          }
        />
      </Routes>
    
  );
};

export default Main;
