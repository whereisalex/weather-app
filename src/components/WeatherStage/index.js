import React, {useEffect, useState} from 'react';
import { WEATHER_API_7_DAYS, WEATHER_API_24_HOURS, WEATHER_API_CURRENT, fetchAccessToken, fetchWeather }  from '../../utils/weather';
import WeatherCurrentDay from './../WeatherCurrentDay';
import WeatherWeekDay from './../WeatherWeekDay';
import './styles.css';

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
          setCurrentWeather(weatherCurrent);
          setWeekWeather((weather7Days['7days'] && weather7Days['7days'].splice(1,7)) || []);
        } catch (error) {
            setIsLoaded(true);
            setError(error);
          }
        }
        fetchWeatherData()
      }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
     if (!isLoaded) {
      return <div>Loading...</div>;
     }

    return (
      <div className="WeatherStage">
        <div className="CurrentDay">
          <WeatherCurrentDay date={currentWeather?.formatted_date} currentDay={currentWeather.current_day} currentHour={currentWeather.current_hour} city={currentWeather?.info?.name?.de} />
        </div>
        <ul className='CurrentWeek'>
          {weekWeather && weekWeather.map((day) => 
             <WeatherWeekDay key={day.date} day={day} />
          )}
        </ul>
      </div>
    );
  }

  export default WeatherStage;