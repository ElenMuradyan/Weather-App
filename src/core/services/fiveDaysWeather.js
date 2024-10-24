import { url } from "../utils/constants";

const fiveDaysWeather = async () => {
    let forecast=[];
try{
    const response = await fetch(url);
    const data = await response.json();
    const fiveDayForecast = data.list.filter(item => item.dt_txt.endsWith('12:00:00')); // Get data for noon
    forecast = fiveDayForecast.map(item => ({
        date: item.dt_txt,
        temperature: item.main.temp,
        weatherDescription: item.weather[0].description,
        iconUrl: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
        windSpeed: Math.round(item.wind.speed),
        windDirection: getWindDirection(item.wind.deg),
    }));
}catch(error){
    console.error('Error fetching weather data:', error);
}
return forecast;
};
const getWindDirection = (degree) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
    return directions[Math.round((degree % 360) / 45)];
};
export{
    fiveDaysWeather
}