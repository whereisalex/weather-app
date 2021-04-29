import weatherSun from './../../assets/icons/light/1.png';
import weatherSunCloud from './../../assets/icons/light/3.png';
import weatherSunCloudRain from './../../assets/icons/light/4.png';
import weatherFog from './../../assets/icons/light/17.png';
import weatherCloud from './../../assets/icons/light/18.png';
import weatherCloudRain from './../../assets/icons/light/20.png';
import weatherCloudSnow from './../../assets/icons/light/21.png';
import weatherCloudRainSnow from './../../assets/icons/light/22.png';
import weatherThunder from './../../assets/icons/light/26.png';
import weatherMoon from './../../assets/icons/light/-1.png';
import weatherMoonCloud from './../../assets/icons/light/-3.png';
import weatherMoonCloudRain from './../../assets/icons/light/-4.png';
import weatherDarkSun from './../../assets/icons/dark/1.png';
import weatherDarkSunCloud from './../../assets/icons/dark/3.png';
import weatherDarkSunCloudRain from './../../assets/icons/dark/4.png';
import weatherDarkFog from './../../assets/icons/dark/17.png';
import weatherDarkCloud from './../../assets/icons/dark/18.png';
import weatherDarkCloudRain from './../../assets/icons/dark/20.png';
import weatherDarkCloudSnow from './../../assets/icons/dark/21.png';
import weatherDarkCloudRainSnow from './../../assets/icons/dark/22.png';
import weatherDarkThunder from './../../assets/icons/dark/26.png';
import weatherDarkMoon from './../../assets/icons/dark/-1.png';
import weatherDarkMoonCloud from './../../assets/icons/dark/-3.png';
import weatherDarkMoonCloudRain from './../../assets/icons/dark/-4.png';
import './styles.css';

const mapImageToId = (id) => {
    switch(id){
        case 1:
        case 2:
            return {light: weatherSun, dark: weatherDarkSun, alt: 'sunny'};
        case 3:
        case 10:
            return {light: weatherSunCloud, dark: weatherDarkSunCloud, alt: 'sun with clouds'};
        case 4:
        case 5:
            return {light: weatherSunCloudRain, dark: weatherDarkSunCloudRain, alt: 'rainy'};
        case 17:
            return {light: weatherFog, dark: weatherDarkFog, alt: 'foggy'};
        case 18:
        case 19:
            return {light: weatherCloud, dark: weatherDarkCloud, alt: 'cloudy'};
        case 20:
        case 23:
        case 25:
            return {light: weatherCloudRain, dark: weatherDarkCloudRain, alt: 'rainy'};
        case 21:
        case 24:
        case 27:
            return {light: weatherCloudSnow, dark: weatherDarkCloudSnow, alt: 'snow'};
        case 22:
        case 29:
            return {light: weatherCloudRainSnow, dark: weatherDarkCloudRainSnow, alt: 'rand and snow'};
        case 26:
        case 28:
        case 30:
            return {light: weatherThunder, dark: weatherDarkThunder, alt: 'stormy'};
        case -1:
        case -2:
            return {light: weatherMoon, dark: weatherDarkMoon, alt: 'clear night'};
        case -3:
        case -10:
            return {light: weatherMoonCloud, dark: weatherDarkMoonCloud, alt: 'cloudy night'};
        case -4:
        case -5:
            return {light: weatherMoonCloudRain, dark: weatherDarkMoonCloudRain, alt: 'rainy night'};
        default:
            return null;
    }
}
 
const WeatherIcon = ({id}) => {
    const weather = mapImageToId(parseInt(id));
    if (!weather){
        return null;
    }
    return (
        <div className="WeatherIconContent">
            <img className="ImageLight" src={weather.light} alt={weather.alt} />
            <img className="ImageDark" src={weather.dark} alt={weather.alt} />
        </div>);
}

export default WeatherIcon;