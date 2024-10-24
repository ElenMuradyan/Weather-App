import { currentWeatherUrl } from "../utils/constants";

const CurrentWeatherFunction = async () => {
    let currentWeather = {};
    try{
    const response = await fetch(currentWeatherUrl);
    const data = await response.json();
    const temperature = Math.round(data.main.temp); 
    const maxTemperature = Math.round(data.main.temp_max); 
    const minTemperature = Math.round(data.main.temp_min); 
    const weatherDescription = data.weather[0].description; 
    const windSpeed = Math.round(data.wind.speed); 
    const windDirection = data.wind.deg;
    const windDirectionText = getWindDirection(windDirection);
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
    
    currentWeather = {
        temperature:temperature,
        maxTemperature:maxTemperature,
        minTemperature:minTemperature,
        weatherDescription:weatherDescription,
        windSpeed:windSpeed,
        windDirection: windDirectionText,
        iconUrl:iconUrl
    };
console.log(currentWeather)
    }catch(error){
        console.log(error)    
}
return currentWeather
};

const getWindDirection = (degree) => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'];
    return directions[Math.round((degree % 360) / 45)];
};

export{
    CurrentWeatherFunction
}