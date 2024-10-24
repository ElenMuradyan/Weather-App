import { url } from "../utils/constants";

const mainPageWeatherHoursFunction = async () => {
    let mainPageWeatherHours = [];
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
        mainPageWeatherHours.push({
            hour:formattedTime,
            temperature:temperature,
            iconUrl:iconUrl,
            weather:weather,
            rainProbability:rainProbability
        })
      });
    }catch(error){
       console.error('Error fetching weather data:', error);
   }
   return mainPageWeatherHours
}

export {
    mainPageWeatherHoursFunction
}