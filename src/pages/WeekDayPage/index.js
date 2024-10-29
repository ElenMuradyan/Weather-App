import { hourlyWeather } from "../../core/services/hourlyWeather";
import { useEffect, useState } from "react";
import { Flex } from "antd";
import { useParams } from "react-router-dom";
import Loading from "../../components/sheard/Loading";
import Hour from "../../components/sheard/Hour";
import { useSelector } from "react-redux";

const WeekDayPage = () => {
    const [ data, setData ] = useState({});
    const [loading, setLoading] = useState(true);
    const { dayName } = useParams();
    const  city = useSelector((state)=>state.city.value);

    const getWeather = async (city) => {
        try{
            setData(await hourlyWeather(city));
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        if (city) {
            getWeather(city);
        } else {
            console.log(city)
            setLoading(false);
        }
    }, [city]);

    if (loading) {
        return <Loading/>;
    }

return(<Flex align="center" justify="center" vertical>
        {
        data[dayName]?.map((item, idx) => {
        return (
            <Hour data={item} key={idx}></Hour>
        )
    })
        }
</Flex>)
};

export default WeekDayPage;