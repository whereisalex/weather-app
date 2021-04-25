import React, {useEffect, useState} from 'react';
import { WEATHER_API_7_DAYS, WEATHER_API_CURRENT, fetchAccessToken, fetchWeather }  from '../../utils/weather';

import WeatherIcon from './../WeatherIcon';
import {getWeekDay} from '../../utils/date';
import styles from './styles.css';

const WeatherStage = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentWeather, setCurrentWeather] = useState({});
    const [weekWeather, setWeekWeather] = useState([]);

    useEffect(() => {
      async function fetchWeatherData() { 
        try {
          const accessToken = await fetchAccessToken();
          const weatherCurrent = await fetchWeather(WEATHER_API_CURRENT, accessToken, 47.36667, 8.5 );
          const weather7Days = await fetchWeather(WEATHER_API_7_DAYS, accessToken, 47.36667, 8.5 );
          setIsLoaded(true);
          setCurrentWeather(weatherCurrent)
          setWeekWeather((weather7Days['7days'] && weather7Days['7days'].splice(1,7)) || [])
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
          <div>
              <div>
              <div>{currentWeather?.info?.name?.de}</div>
          <div>{currentWeather?.formatted_date}</div>  
          <div>Min: {currentWeather?.current_day?.values[0]?.ttn}°</div>  
          <div>Max: {currentWeather?.current_day?.values[2]?.ttx}°</div>  
              </div>
        <ul className={'current-week'}>
         {weekWeather && weekWeather.map((day) => 
             (<div key={day.date}>
                 {getWeekDay(day.date)}
                 <WeatherIcon id={day?.values[1]?.smbd}/>
                 <div>Min: {day?.values[0]?.ttn}°</div>  
                 <div>Max: {day?.values[2]?.ttx}°</div>  
             </div>)
         )}
        </ul>
        </div>
      );
    }
  }

  export default WeatherStage;