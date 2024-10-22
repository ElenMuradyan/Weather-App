// import { formattedDate } from "../../../core/functions/getData"; 
// import { currentTimeClock } from "../../../core/functions/getHour";
// import { currentWeather } from "../../../core/services/currentWeather";
// import {Typography} from "antd";
// import { Flex } from "antd";
// import './index.css';

// const { Title } = Typography;

// const CurrentWeather = () => {
//     const { weatherDescription, windSpeed, iconUrl, windDirection, temperature, maxTemperature, minTemperature } = currentWeather;

//     return (
//         <div className="current_weather_container">
//             <Flex justify="space-between" align='center' className="flex_container">
//             <Flex vertical>
//             <Title level={3}>{formattedDate}</Title>
//             <Title level={3}>{currentTimeClock}AM</Title>
//             </Flex>
//             <Flex>
//                 <Title>{temperature}°C</Title>
//             </Flex>
//             <Flex align="center" justify="center" vertical>
//             <img src={iconUrl}></img>
//             <Title level={4}>{weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1).toLowerCase()}</Title>
//             </Flex>
//             </Flex>
//             <Flex justify="space-between" align="center">
//             <Flex justify="center" align="center" vertical>
//             <Title level={5}>Wind direct:{windDirection}</Title>
//             <Title level={5}>Wind speed:{windSpeed}</Title>
//             </Flex>
//             <Flex justify="center" align="center" vertical>
//             <Title level={5}>Max:{maxTemperature}</Title>
//             <Title level={5}>Min:{minTemperature}</Title>
//             </Flex>
//             </Flex>
//         </div>
//     )
// }

// export default CurrentWeather;