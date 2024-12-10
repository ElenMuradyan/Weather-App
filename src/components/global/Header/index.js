import { Col, Flex, Typography } from "antd";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchCity from "../../SearchCity";
import Loading from "../../sheard/Loading";
import { useSelector } from "react-redux";
import { Colors } from "../../../core/utils/constants";

import './index.css';

const { Title } = Typography;

const Header = () => {
    const city = useSelector((state)=>state.city.value);
    const navigate = useNavigate();
    const location = useLocation();
    const { cityName, dayName } = useParams();

    useEffect(()=>{
        navigate(`${city}`);
    },[]);
    
    if(!cityName){
        return(<Loading></Loading>)
    }
    return (
        <Flex className="header_container" justify="space-between" align="center">
        <Flex vertical>
        {location.pathname !== `/${cityName}` && <Link to={`/${cityName}`} className="title">
        <Title level={5} style={{color: Colors.grey}} className="link">MAIN PAGE</Title>
        </Link>}
        <Title level={3} style={{color: Colors.opacity}}>{cityName.toUpperCase()}</Title>
        {dayName && <Title level={3} style={{color: Colors.opacity,margin:0}}>{dayName.toUpperCase()}</Title>}    
        </Flex> 
        {location.pathname !== `/${cityName}/${dayName}` && <SearchCity></SearchCity>}
        </Flex>
    )
};

export default Header;