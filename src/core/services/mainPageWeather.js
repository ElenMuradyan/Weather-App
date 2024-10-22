import { url } from "../utils/constants";
let mainPageWeatherHours={};
let hours=[];

const mainPageWeatherHoursFunction = async () => {
   try{
    const response = await fetch(url);
    const data = await response.json();
    const hourlyData = data.list.slice(0, 8); 
    hourlyData.forEach(hour => {
        const time = new Date(hour.dt * 1000);
        const temperature = hour.main.temp;
        const weather = hour.weather[0].description;
        const timeString = time.toISOString();
        const formattedTime = timeString.slice(11, 16);
        const iconCode = hour.weather[0].icon; 
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        const rainProbability = hour.pop ? hour.pop * 100 : 0;
        mainPageWeatherHours[formattedTime]={
          temperature:temperature,
          weather:weather,
          iconUrl:iconUrl,
          rainProbability:rainProbability
        }
        hours.push(formattedTime);
      });
    }catch(error){
       console.error('Error fetching weather data:', error);
   }
}

mainPageWeatherHoursFunction();

export {
    mainPageWeatherHours,
    hours
}