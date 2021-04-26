
import React from 'react';
import WeatherIcon from './../WeatherIcon';
import './styles.css';

const WeatherCurrentDay = ({current_day, city, date}) => {
    return (
        <div>
            <div>
                <div>{city}</div>
                <div>{date}</div>  
                <div>Min: {current_day?.values[0]?.ttn}°</div>  
                <div>Max: {current_day?.values[2]?.ttx}°</div> 
            </div>
            <div>
            <WeatherIcon id={current_day?.values[1]?.smbd}/>
            </div> 
        </div>    
    );
  }

  export default WeatherCurrentDay;