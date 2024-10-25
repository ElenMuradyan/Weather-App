import { hourlyWeather } from "../../core/services/hourlyWeather";
import { useEffect, useState } from "react";
import { Flex } from "antd";
import { useParams } from "react-router-dom";
import Loading from "../../components/sheard/Loading";
import Hour from "../../components/sheard/Hour";

const WeekDayPage = () => {
    const [ data, setData ] = useState({});
    const [loading, setLoading] = useState(true);
    const { dayName } = useParams();

    const getWeather = async () => {
        try{
            setData(await hourlyWeather());
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    };

    useEffect(()=>{
        getWeather();
    },[]);

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