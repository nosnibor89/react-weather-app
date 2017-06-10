import axios from 'axios';

const WEATHER_API_KEY = 'fe26253124eac69df63d65613ab8ed35';
const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_API_KEY}&units=metric`;


class WeatherData {
    getTemp(location){
        let requestUrl = `${WEATHER_API_URL}&lat=${location.lat}&lon=${location.lon}`;

        return axios.get(requestUrl)
            .then((res) => {
                if(res.data.cod && res.data.name){
                    return res.data;
                }else{
                    throw new Error(res.data.message);
                }
            })
            .catch((res) => {
                console.log(res);
                throw new Error(res.data.message)
            })
    }
}

export default WeatherData;