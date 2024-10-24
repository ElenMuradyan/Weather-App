import { formattedDate } from "../../../core/functions/getData"; 
import { currentTimeClock } from "../../../core/functions/getHour";
import { CurrentWeatherFunction } from "../../../core/services/currentWeather";
import { useEffect, useState } from "react";
import {Typography} from "antd";
import { Flex } from "antd";
import { Colors } from "../../../core/utils/constants";
import Loading from "../Loading";
import './index.css';

const { Title } = Typography;

const CurrentWeather = () => {
    const [currentWeather, setCurrentWeather] = useState({
        weatherDescription: '',
        windSpeed: '',
        iconUrl: '',
        windDirection: '',
        temperature: '',
        maxTemperature: '',
        minTemperature: ''
    });
        const getCurrentWeather = async () => {
            const data = await CurrentWeatherFunction()
            setCurrentWeather(data);
    };

    useEffect(()=>{
        getCurrentWeather();
    },[]) 

    if (!currentWeather.temperature) {
        return <Loading/>;
    }

    const { weatherDescription, windSpeed, iconUrl, windDirection, temperature, maxTemperature, minTemperature } = currentWeather;
     
    return (
        <div className="current_weather_container">
            <Flex align="center" vertical>
            <Title level={3} style={{color:Colors.whiteOpacity,margin: '0', padding: '0' }}>{formattedDate}</Title>
            <Title level={3} style={{color:Colors.whiteOpacity,margin: '0', padding: '0'}}>{currentTimeClock}<span style={{fontSize:10}}>AM</span></Title>
            </Flex>
            <Flex justify="space-between" align='center' className="flex_container">
            <Flex vertical align="center" justify="center">
                <Title level={3} style={{margin: '0', padding: '0', textAlign:'center', color:'white'}}>THE CURRENT TEMPERATURE IS</Title>
                <Title level={3} style={{margin: '0', padding: '0', color:'white'}}>{temperature}°C</Title>
                <img src={iconUrl} alt="weatherDescribtion"></img>
                <Title level={4} style={{color:'white'}}>{weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1).toLowerCase()}</Title>
            </Flex>
            <Flex justify="center" align="flex-end" vertical className="description">
            <Title level={5} style={{color:Colors.whiteOpacity}}>Wind direction:{windDirection}</Title>
            <Title level={5} style={{color:Colors.whiteOpacity}}>Wind speed:{windSpeed}</Title>
            <Title level={5} style={{color:Colors.whiteOpacity}}>Max:{maxTemperature}</Title>
            <Title level={5} style={{color:Colors.whiteOpacity}}>Min:{minTemperature}</Title>
            </Flex>
            </Flex>
        </div>
    )
}

export default CurrentWeather;