# Weather Dashboard

A simple React + Node.js app to fetch and display current weather information using a city name.

## Project Flow Stucture
weather-dashboard/
├── client/ # React Frontend
│ ├── src/
│ │ ├── components/ # WeatherCard, SearchBar, etc.
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
├── server/ # Node.js Backend
│ ├── routes/
│ │ └── weather.js # /weather endpoint logic
│ ├── server.js
│ └── package.json
├── .gitignore
└── README.md


## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express
- **API Source:** [OpenWeatherMap](https://openweathermap.org/)

## Getting Started

### 1. Clone the Repository

```bash
git https://github.com/CoderShobhitSingh/Weather_Application.git

###
for start the frontend --> npm start
for start the backend --> node server.js
