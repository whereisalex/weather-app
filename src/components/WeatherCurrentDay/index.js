
import React from 'react';
import WeatherIcon from './../WeatherIcon';
import './styles.css';

const WeatherCurrentDay = ({currentDay, currentHour, city, date}) => {
    if (!currentDay || !currentDay['TN_C'] || !currentDay['TX_C'] || !currentHour['TTL_C']){
        return null;
    }

    const today = new Date(date);
    
    return (
        <div className="WeatherCurrentDay">
            <div className="WeatherCurrentDayContentWrapper">
                <div className="InfoWrapper">
                    <div className="CurrentCity">{city}</div>
                    <div className="CurrentDate"><span className="Today">today</span>{today.toLocaleDateString("de-CH")}</div>  
                    <div className="WeatherIconWrapper">
                      <WeatherIcon id={currentDay['SYMBOL_CODE']}/>
                    </div> 
                </div>
                <div className="TemperaturWrapper">
                    <div className="CurrentTemp">
                        {currentHour['TTL_C']}°
                    </div>
                    <div className="MinMaxTemp">{`${currentDay['TN_C']}°  |  ${currentDay['TX_C']}°`}</div>  
                </div>
            </div>
        </div>    
    );
  }

  export default WeatherCurrentDay;