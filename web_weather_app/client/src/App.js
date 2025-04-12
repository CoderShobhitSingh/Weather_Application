import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./App.css";

function App() {
  const [wether, setWetherInf] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setWetherInf(null);
    setError("");
    try {
      const response = await axios.get(
        `http://localhost:5000/weather?city=${city}`
      );
      setWetherInf(response.data);
    } catch (err) {
      console.error("API Error:", err.response?.data?.error || err.message);
      setError(err.response?.data?.error || "City not found or server error");
    }
  };

  return (
    <div className="main_div">
      <h1 className="head">Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error-message">{error}</p>}
      {wether && <WeatherCard weather={wether} />}
    </div>
  );
}

export default App;
