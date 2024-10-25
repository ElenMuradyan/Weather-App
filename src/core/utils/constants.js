export const ROUTE_CONSTANTS = {
    MAIN:'/main',
    MONDAY: '/Monday',
    TUESDAY: '/Tuesday',
    WEDNESDAY: '/Wednesday',
    THURSDAY: '/Thursday',
    FRIDAY: '/Friday',
    SATURDAY: '/Saturday',
    SUNDAY: '/Sunday'
}

export const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const apiKey = '840b1a6d067573c41b2da7a6e203c8e2'; 
const city = 'Yerevan'; 
export const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
export const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

export const width = 400;
export const height = 150;
export const margin = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  };

  export const Colors = {
    whiteOpacity:'rgba(255, 255, 255, 0.571)',
  };
