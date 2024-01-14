import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState(null);
  const [apiKey] = useState("c765779cb0164be2a3f153104241301");
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
    }
  };
  return (
    <>
      <div>
        <h2>Weather App</h2>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchData}>Get Weather</button>

        {weatherData && (
          <div>
            <h3>{weatherData.location.name}</h3>
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            {/* Add more weather information as needed */}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
