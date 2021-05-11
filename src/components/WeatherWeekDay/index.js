import React from 'react';
import WeatherIcon from './../WeatherIcon';
import { getWeekDay } from '../../utils/date';
import './styles.css';

const WeatherWeekDay = ({day}) => {
    if(!day || !day['TX_C'] || !day['TN_C'] || !day['SYMBOL_CODE']){
        return null;
    }

    return (
        <div className="WeekdayWrapper" key={day.local_date_time}>
            <span className="WeekdayName">{getWeekDay(day.local_date_time)}</span>
            <div className="WeatherIcon">
                <WeatherIcon id={day['SYMBOL_CODE']}/>
            </div>
            <div className="WeekdayMax">{day['TX_C']}°</div>  
            <div>{day['TN_C']}°</div>  
        </div>
    );
  }

  export default WeatherWeekDay;