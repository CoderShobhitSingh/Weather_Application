const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/wether', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: 'you have not entered a city name' });

  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);
    const { temp } = response.data.main;
    const { description, icon } = response.data.weather[0];
    const { humidity } = response.data.main;
    const { speed: windSpeed } = response.data.wind;

    res.json({ temp, description, icon, humidity, windSpeed });
  } catch (error) {
    res.status(500).json({ error: 'City not found or API error' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
