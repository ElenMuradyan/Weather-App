import CurrentWeather from '../../components/sheard/CurrentWeather';
import CurrentWeatherHours from '../../components/sheard/CurrentWeatherHours';
import NextFiveDays from '../../components/sheard/NextFiveDays';
const Main = () => {
    return (
        <div>
            <CurrentWeather></CurrentWeather> 
            <CurrentWeatherHours></CurrentWeatherHours>
            <NextFiveDays></NextFiveDays>

        </div>
    )
}

export default Main;