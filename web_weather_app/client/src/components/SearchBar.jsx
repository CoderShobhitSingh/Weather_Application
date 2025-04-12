import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <div className="src_input">
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Enter City"
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default SearchBar;
