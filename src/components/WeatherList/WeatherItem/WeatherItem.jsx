

const WeatherItem = ({ item }) => {
  return (
    <div>
      <h4>Date/time: {item.dt_txt}</h4>
      <p>Rain: {item.weather && item.weather[0].description}</p>
      <p>Wind: {item.wind && item.wind.speed} speed</p>
      <p>Temperature: {item.main && item.main.temp}</p>
    </div>
  );
};

export default WeatherItem;
