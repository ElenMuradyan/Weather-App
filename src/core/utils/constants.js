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

export const apiKey = process.env.REACT_APP_WEATHER_FETCH_API_KEY;
export const url = `https://api.openweathermap.org/data/2.5/forecast?q=`;
export const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

export const width = 400;
export const height = 150;
export const fontSize = 15;
export const minHeight = 40;

export const margin = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20,
};

export const Colors = {
  whiteOpacity:'rgba(255, 255, 255, 0.571)',
  opacity: 'rgba(0, 0, 0, 0.5)',
  grey: 'rgba(0, 0, 0, 0.207)',
};