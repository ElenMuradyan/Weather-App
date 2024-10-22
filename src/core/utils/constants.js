export const ROUTE_CONSTANTS = {
    MAIN:'./main',
}

export const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const apiKey = '840b1a6d067573c41b2da7a6e203c8e2'; 
const city = 'Yerevan'; 
export const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
export const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;