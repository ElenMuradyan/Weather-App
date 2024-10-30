import { Flex, Typography } from "antd";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchCity from "../../SearchCity";
import Loading from "../../sheard/Loading";
import { useSelector } from "react-redux";

import './index.css';

const { Title } = Typography;

const Header = () => {
    const city = useSelector((state)=>state.city.value);
    const navigate = useNavigate();
    const [ urlState, setUrlState] = useState(false);
    const location = useLocation();
    const { cityName, dayName } = useParams();

    useEffect(()=>{
        setUrlState(location.pathname !== `/${cityName}`);
    },[location.pathname]);

    useEffect(()=>{
        navigate(`${city}`);
    },[]);
    
    if(!cityName){
        return(<Loading></Loading>)
    }
    return (
        <Flex className="header_container" justify="space-between" align="center">
        <Flex vertical>
        {urlState && <Link to={`/${cityName}`} className="title">
        <Title level={5} style={{color:'rgba(0, 0, 0, 0.207)'}} className="link">MAIN PAGE</Title>
        </Link>}
        <Title level={3} style={{color:'rgba(0, 0, 0, 0.5)'}}>{cityName.toUpperCase()}</Title>
        {dayName && <Title level={3} style={{color:'rgba(0, 0, 0, 0.5)',margin:0}}>{dayName.toUpperCase()}</Title>}    
        </Flex> 
        {!urlState && <SearchCity></SearchCity>}
        </Flex>
    )
};

export default Header;