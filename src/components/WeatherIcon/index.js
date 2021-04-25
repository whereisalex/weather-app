import weather1 from './../../assets/symbole/1.png';
import weather10 from './../../assets/symbole/10.png';
import weather11 from './../../assets/symbole/11.png';
import weather2 from './../../assets/symbole/2.png';
import weather3 from './../../assets/symbole/3.png';
import weather4 from './../../assets/symbole/4.png';
import weather5 from './../../assets/symbole/5.png';
import weather6 from './../../assets/symbole/6.png';
import weather7 from './../../assets/symbole/7.png';
import weather8 from './../../assets/symbole/8.png';
import weather9 from './../../assets/symbole/9.png';

const mapImageToId = (id) => {
    switch(id){
        case 1:
            return weather1;
        case 2:
            return weather2;
        case 3:
            return weather3;
        case 4:
            return weather4;
        case 5:
            return weather5;
        case 6:
            return weather6;
        case 7:
            return weather7;
        case 8:
            return weather8;
        case 9:
            return weather9;
        case 10:
            return weather10;
        case 11:
            return weather11;
        default:
            return null;
    }
}
 
const WeatherIcon = ({id}) => {
    const url = mapImageToId(parseInt(id));
    if (!url){
        return null;
    }
    return <img src={url} alt='Weather' />;
}

export default WeatherIcon;