import React, { useState, useEffect } from 'react';
import CurrentWeather from './components/current-weater/current-weather';
import Search from './components/search/search';
import Forecast from './components/forcast/forcast';
import './App.css';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';

const weatherBackgrounds = {
  '01d': '/backs/01d.png', // clear sky day
  '01n': '/backs/01n.png', // clear sky night
  '02d': '/backs/04.png', // few clouds day (using clear-sky image as an example)
  '02n': '/backs/01n.png', // few clouds night (using clear-sky image as an example)
  '03d': '/backs/04.png', // scattered clouds day (using clear-sky image as an example)
  '03n': '/backs/01n.png', // scattered clouds night (using clear-sky image as an example)
  '04d': '/backs/04.png', // broken clouds day (using clear-sky image as an example)
  '04n': '/backs/01n.png', // broken clouds night (using clear-sky image as an example)
  '09d': '/backs/09.png', // shower rain day 
  '09n': '/backs/09.png', // shower rain night 
  '10d': '/backs/09.png', // rain day 
  '10n': '/backs/09.png', // rain night 
  '11d': '/backs/11.png', // thunderstorm day
  '11n': '/backs/11.png', // thunderstorm night
  '13d': '/backs/13.png', // snow day
  '13n': '/backs/13.png', // snow night
  '50d': '/backs/50.png', // mist day
  '50n': '/backs/50.png', // mist night
};

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState('/backs/clear-sky.jpeg'); // Default background image

  useEffect(() => {
    if (currentWeather) {
      const weatherIcon = currentWeather.weather[0].icon;
      const imageUrl = weatherBackgrounds[weatherIcon] || '/backs/clear-sky.jpeg'; // Default image if icon not found
      setBackgroundImage(imageUrl);
    }
  }, [currentWeather]);

  useEffect(() => {
    if (backgroundImage) {
      document.body.style.backgroundImage = `url(${backgroundImage})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'top left'; // Pins background to the top-left
      document.body.style.backgroundAttachment = 'fixed'; // Keeps the background fixed
      document.body.style.backgroundRepeat = 'no-repeat'; // Prevents repeating the image
    } else {
      document.body.style.backgroundImage = '';
    }
  }, [backgroundImage]);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {!currentWeather && !forecast && (
        <div className="welcome-message">
          <h1>Welcome to the Weather App</h1>
          <p>Search for a city to see the current weather and forecast.</p>
        </div>
      )}
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
