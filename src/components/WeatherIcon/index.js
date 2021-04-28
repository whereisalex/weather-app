import weatherSun from './../../assets/icons/dark/1.png';
import weatherSunCloud from './../../assets/icons/dark/3.png';
import weatherSunCloudRain from './../../assets/icons/dark/4.png';
import weatherFog from './../../assets/icons/dark/17.png';
import weatherCloud from './../../assets/icons/dark/18.png';
import weatherCloudRain from './../../assets/icons/dark/20.png';
import weatherCloudSnow from './../../assets/icons/dark/21.png';
import weatherCloudRainSnow from './../../assets/icons/dark/22.png';
import weatherThunder from './../../assets/icons/dark/26.png';
import weatherMoon from './../../assets/icons/dark/-1.png';
import weatherMoonCloud from './../../assets/icons/dark/-3.png';
import weatherMoonCloudRain from './../../assets/icons/dark/-4.png';

const mapImageToId = (id) => {
    switch(id){
        case 1:
        case 2:
            return weatherSun;
        case 3:
        case 10:
            return weatherSunCloud;
        case 4:
        case 5:
            return weatherSunCloudRain;
        case 17:
            return weatherFog;
        case 18:
        case 19:
            return weatherCloud;
        case 20:
        case 23:
        case 25:
            return weatherCloudRain;
        case 21:
        case 24:
        case 27:
            return weatherCloudSnow;
        case 22:
        case 29:
            return weatherCloudRainSnow;
        case 26:
        case 28:
        case 30:
            return weatherThunder;
        case -1:
        case -2:
            return weatherMoon;
        case -3:
        case -10:
            return weatherMoonCloud;
        case -4:
        case -5:
            return weatherMoonCloudRain;
        default:
            return null;
    }
}
 
const symbolIcon = ({id}) => {
    const url = mapImageToId(parseInt(id));
    if (!url){
        return null;
    }
    return <img src={url} alt='symbol' />;
}

export default symbolIcon;