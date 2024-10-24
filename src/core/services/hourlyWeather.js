import { url } from "../utils/constants";
import { daysArray } from "../functions/nextFiveDays";

const hourlyWeather = async () => {
    let weatherByDay= {};
    try{
        const response = await fetch(url);
        const data = await response.json();

        let dailyForecast = data.list;

        daysArray.forEach((item) => {
            weatherByDay[item] = []
            let hours = dailyForecast.slice(0,8);
            dailyForecast.splice(0, 8);

            hours.forEach(hour => {
            weatherByDay[item].push({
                day:item,
                hour:hour.dt_txt.slice(11,16),
                temperature:hour.main.temp,
                weather:hour.weather[0].main,
                iconUrl: `https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`,               
                windSpeed:Math.round(hour.wind.speed),
                windDirection:getWindDirection(hour.wind.deg),
                max:Math.round(hour.main.temp_max),
                min:Math.round(hour.main.temp_min)
            })
            })
        })
    }catch(error){
        console.error('Error fetching weather data:', error);
    }
return weatherByDay;
}
const getWindDirection = (degree) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
    return directions[Math.round((degree % 360) / 45)];
};
export{
    hourlyWeather,
}