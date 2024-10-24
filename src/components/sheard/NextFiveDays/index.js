import { daysArray } from "../../../core/functions/nextFiveDays";
import { useEffect, useState } from "react";
import { Flex } from "antd";
import { Link } from "react-router-dom";
import { fiveDaysWeather } from "../../../core/services/fiveDaysWeather";
import { Typography } from "antd";
import { Colors } from "../../../core/utils/constants";
import './index.css';

const { Title } = Typography;

const NextFiveDays = () => {
    const [ weatherData, setWeatherData ] = useState({});

    const getWeather = async () => {
        const data = await fiveDaysWeather();
        setWeatherData(data)
    };

    useEffect(()=>{
        getWeather();
        console.log(weatherData);
    },[]);
    if(!weatherData.length){
return(
    <div>Loading...</div>
)
    }

return(<div className="days_container">
    <Title level={3} style={{color:Colors.whiteOpacity}}>Weather For The Next Five Days</Title>
    <Flex justify="space-between">
        {weatherData.map((item, idx) => {
    const { weatherDescription, windSpeed, iconUrl, windDirection, temperature } = item;
    return( <Link to={`/${idx+1}`} style={{color:'white'}}><Flex justify="center" align="center" vertical key={idx} className='day'>
                    <span>{daysArray[idx]}</span>
                    <img src={iconUrl} alt={weatherDescription}/>
                    <span>{Math.round(temperature)}°C</span>
                    <span>Wind Speed:{windSpeed}</span>
                    <span>Wind Direction:{windDirection}</span>
                    </Flex>
            </Link>
            )
        })}
    </Flex>
    </div>)
}

export default NextFiveDays;