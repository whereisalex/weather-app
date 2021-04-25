import React, {useEffect, useState} from 'react';
import {fetchAccessToken, fetchWeather} from '../../utils/weather';

const WeatherStage = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});

    useEffect(() => {
        async function fetchWeatherData() { 
            try {
                const accessToken = await fetchAccessToken();
                const weatherCurrent = await fetchWeather('current',accessToken, 47.36667, 8.5 );
                const weather7Days = await fetchWeather('7day',accessToken, 47.36667, 8.5 );
                setIsLoaded(true);
                setItems(weatherCurrent)
                console.log('weather', weatherCurrent,weather7Days);
        } catch (error) {
            setIsLoaded(true);
            setError(error);
            }
        }
        fetchWeatherData()
      }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          <li>{items?.info?.name?.de}</li>
          <li>{items?.formatted_date}</li>  
          <li>Min: {items?.current_day?.values[0]?.ttn}°</li>  
          <li>Max: {items?.current_day?.values[2]?.ttx}°</li>  
        </ul>
      );
    }
  }

  export default WeatherStage;