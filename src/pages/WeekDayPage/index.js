import { hourlyWeather } from "../../core/services/hourlyWeather";
import { useEffect, useState } from "react";
import { Flex } from "antd";
import Hour from "../../components/sheard/Hour";

const WeekDayPage = ({ dayName }) => {
    const [ data, setData ] = useState({});
    const [loading, setLoading] = useState(true);

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
        return <div>Loading...</div>;
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