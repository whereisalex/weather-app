
import React from 'react';
import WeatherIcon from './../WeatherIcon';
import './styles.css';

const WeatherCurrentDay = ({currentDay, currentHour, city, date}) => {
    return (
        <div className="WeatherCurrentDay">
            <div className="WeatherCurrentDayContentWrapper">
                <div className="InfoWrapper">
                    <div className="CurrentCity">{city}</div>
                    <div className="CurrentDate"><span className="Today">today</span>{date}</div>  
                    <div className="WeatherIconWrapper">
                    <WeatherIcon id={currentDay?.values[1]?.smbd}/>
                    </div> 
                </div>
                <div class="TemperaturWrapper">
                    <div className="CurrentTemp">
                        {currentHour?.[0]?.values?.[1]?.ttt}°
                    </div>
                    <div className="MinMaxTemp">{`${currentDay?.values[0]?.ttn}°  |  ${currentDay?.values[2]?.ttx}°`}</div>  
                </div>
            </div>
        </div>    
    );
  }

  export default WeatherCurrentDay;