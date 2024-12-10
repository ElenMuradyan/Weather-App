import CurrentWeather from '../../components/sheard/CurrentWeather';
import CurrentWeatherHours from '../../components/sheard/CurrentWeatherHours';
import NextFiveDays from '../../components/sheard/NextFiveDays';
import { useSelector } from 'react-redux';
import { currentWeatherUrl } from '../../core/utils/constants';
import { url } from '../../core/utils/constants';
import { notification } from 'antd';
import { apiKey } from '../../core/utils/constants';
import { useEffect, useState } from 'react';
import Loading from '../../components/sheard/Loading';

const Main = () => {
    const [ currentWeather, setCurrentWeather ] = useState({});
    const [ weather, setWeather ] = useState({});
    const [ loading, setLoading ] = useState(false);

    const city = useSelector((state) => state.city.value);
    
    const fetchCurrentWeather = async () => {
        setLoading(true);
        try{
            const currentResponse = await fetch(`${currentWeatherUrl}${city}&appid=${apiKey}&units=metric`);
            const data = await currentResponse.json();
            setCurrentWeather(data)

            const hourlyResponse = await fetch(`${url}${city}&appid=${apiKey}&units=metric`);
            const hourlyData = await hourlyResponse.json();
            setWeather(hourlyData);
        }catch{
            notification.error({
                message:'Error fetching data.'
            })
        }finally{
            setLoading(false);
        }
    };

    if(loading){
        <Loading></Loading>
    };

    useEffect(()=>{
        fetchCurrentWeather(city);
    },[city]);
    
    return (
        <div>
            {currentWeather.weather && <CurrentWeather currentWeatherData={currentWeather}></CurrentWeather>}
            {
                weather.list && (<>
                    <CurrentWeatherHours currentWeatherHoursData={weather}></CurrentWeatherHours>
                    <NextFiveDays nextFiveDaysData={weather}></NextFiveDays>
                </>
                )
            }
        </div>
    )
}

export default Main;