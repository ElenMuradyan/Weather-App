import { mainPageWeatherHours, hours } from "../../../core/services/mainPageWeather";
import { Flex } from "antd";
import './index.css';

const CurrentWeatherHours = () => {
    console.log(mainPageWeatherHours,hours)
return(
    <div className='hours_container'>
        {hours.map((hour, idx) => {
            const { temperature, weather, iconUrl, rainProbability} = mainPageWeatherHours[hour];
            return (
            <Flex justify="center" align="center" vertical key={idx}>
                <span>{hour}</span>
                <img src={iconUrl} alt={weather}/>
                <Flex align="center"><img src={`http://openweathermap.org/img/wn/10d@2x.png`} alt="Rain" style={{width:50}}/><span>{rainProbability}%</span></Flex>
                <span>{Math.round(temperature)}°C</span>
            </Flex>
                    )
        })}
    </div>
    )
};

export default CurrentWeatherHours;