import { daysArray } from "../../../core/functions/nextFiveDays";
import { useEffect, useState } from "react";
import { Flex, notification } from "antd";
import { Link } from "react-router-dom";
import { fiveDaysWeather } from "../../../core/services/fiveDaysWeather";
import { Typography } from "antd";
import { Colors } from "../../../core/utils/constants";
import Loading from "../Loading";
import { useSelector } from "react-redux";
import './index.css';

const { Title } = Typography;

const NextFiveDays = ({nextFiveDaysData}) => {
    const cityName = useSelector((state) => state.city.value);
    const [ weatherData, setWeatherData ] = useState([]);

    const getWeather = async (data) => {
        try {
            const weatherDataResponse = await fiveDaysWeather(data); // Assuming this returns a promise
            setWeatherData(weatherDataResponse);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        if (nextFiveDaysData) {
            getWeather(nextFiveDaysData);
        }
    }, [nextFiveDaysData]);
    
    if(!weatherData.length){
        return(
            <Loading/>
        )
    }

return(<div className="days_container">
    <Title level={3} style={{color:Colors.whiteOpacity}}>Weather For The Next Five Days</Title>
    <Flex justify="space-between" className="days">
        {weatherData.map((item, idx) => {
    const { weatherDescription, windSpeed, iconUrl, windDirection, temperature } = item;
    return( <Link to={`/${cityName}/${daysArray[idx]}`} style={{color:'white'}}  key={idx}><Flex justify="center" align="center" vertical className='day'>
                    <div className="flex">
                    <span>{daysArray[idx]}</span>
                    <img src={iconUrl} alt={weatherDescription}/>
                    <span>{Math.round(temperature)}°C</span>
                    </div>
                    <div className="flex" style={{color:Colors.whiteOpacity}}>
                    <span>Wind Speed:{windSpeed}</span>
                    <span>Wind Direction:{windDirection}</span>
                    </div>
                    </Flex>
            </Link>
            )
        })}
    </Flex>
    </div>)
}

export default NextFiveDays;