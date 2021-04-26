import React from 'react';
import WeatherIcon from './../WeatherIcon';
import { getWeekDay } from '../../utils/date';
import './styles.css';

const WeatherWeekDay = ({day}) => {
    return (
        <div className="WeekdayWrapper" key={day.date}>
            <span className="WeekdayName">{getWeekDay(day.date)}</span>
            <div className="WeatherIcon">
                <WeatherIcon id={day?.values[1]?.smbd}/>
            </div>
            <div className="WeekdayMax">{day?.values[2]?.ttx}°</div>  
            <div>{day?.values[0]?.ttn}°</div>  
        </div>
    );
  }

  export default WeatherWeekDay;