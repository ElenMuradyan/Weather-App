import { Button, Input, notification, Flex } from "antd";
import { Link } from "react-router-dom";
import { changeCity } from "../../redux/citySlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { currentWeatherUrl, apiKey } from "../../core/utils/constants";
import Loading from "../sheard/Loading";
import { useNavigate } from "react-router-dom";
import './index.css';

const SearchCity = () => {
    const navigate = useNavigate();
    const cityName = useSelector((state) => state.city.value );
    const [ inputValue, setInputValue ] = useState('');
    let city = cityName;
    const [ loading, setLoading ] = useState(false);
    const dispatch = useDispatch();

    const handleInputChange = e => {
        setInputValue(e.target.value);
    };

    const submitCityName = async () => {
        setLoading(true)
        try{
            const response = await fetch(`${currentWeatherUrl}${inputValue}&appid=${apiKey}`);
            if (!response.ok) {
                throw new Error('City not found');
            };
            dispatch(changeCity(inputValue));
            city = inputValue;
        }catch{
            notification.error({
                message:'Invalid city name,please try again',
            });
        }finally{
            setLoading(false);
            setInputValue('');
        }
    };
    const handleKeyDown = async (e) => {
        if(e.key === 'Enter'){
          await submitCityName();
          navigate(`/${city}`);
        }
    }

    if(loading){
        return(<Loading></Loading>);
    }

return(
    <Flex className="search_container">
        <Input placeholder="Enter The City Name" onChange={handleInputChange} value={inputValue} className="input" onKeyDown={handleKeyDown} style={{height:50}}></Input>
        <Link to={`/${city}`}><Button htmlType="submit" onClick={submitCityName} style={{height:50}}>Search</Button></Link>
    </Flex>
);
}

export default SearchCity;