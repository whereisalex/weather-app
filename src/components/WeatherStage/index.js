import React, {useEffect, useState} from 'react';
import { fetchGeolocationByZipCode, fetchAccessToken, forecastByGelocationId }  from '../../utils/weather';
import WeatherCurrentDay from './../WeatherCurrentDay';
import WeatherWeekDay from './../WeatherWeekDay';
import './styles.css';

const WeatherStage = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [weather, setWeather] = useState(null);
    const [geolocation, setGeolocation] = useState(null);

    useEffect(() => {
      async function fetchWeatherData() { 
        try {
          let weatherCurrent = null;
          const accessToken = await fetchAccessToken();
          const geolocation = await fetchGeolocationByZipCode(accessToken, 8003);

          if(geolocation.error){
            setIsLoaded(true);
            setError(geolocation.error);
          } 

          if (geolocation.length){
            weatherCurrent = await forecastByGelocationId(accessToken, geolocation[0].geolocation.id);
          }

          if (weatherCurrent){
            setIsLoaded(true);
            if (weatherCurrent.error){
              setError(weatherCurrent.error);
            } else {
              setWeather(weatherCurrent?.forecast);
              setGeolocation(weatherCurrent?.geolocation);
            }
          }
        } catch (error) {
            setIsLoaded(true);
            setError(error);
          } 
        }
        fetchWeatherData()
      }, [])
  
    if (error || !weather) {
      return <div>Error: {error?.message}</div>;
    }

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    
    let week =  weather?.day?.slice(1,7) || [];

    return (
      <div className="WeatherStage">
        <div className="CurrentDay">
          <WeatherCurrentDay date={weather['60minutes'][0].local_date_time} currentDay={weather.day[0]} currentHour={weather['60minutes'][0]} city={geolocation?.default_name} />
        </div>
        <ul className='CurrentWeek'>
          {week.map((day) => 
             <WeatherWeekDay key={day.local_date_time} day={day} />
          )}
          </ul>
      </div>
    );
  }

  export default WeatherStage;