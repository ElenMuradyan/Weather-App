import { Typography } from "antd";
import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './index.css';

const { Title } = Typography;

const Header = () => {
    const [ urlState, setUrlState] = useState(false);
    const location = useLocation();
    const { cityName, dayName } = useParams();

    useEffect(()=>{
        setUrlState(location.pathname !== `/${cityName}`);
    },[location.pathname]);

    return (
        <div className="header_container">
        {urlState && <Link to={`/${cityName}`} className="title">
        <Title level={5} style={{color:'rgba(0, 0, 0, 0.207)'}} className="link">MAIN PAGE</Title>
        </Link>}
        <Title level={3} style={{color:'rgba(0, 0, 0, 0.5)'}}>{cityName.toUpperCase()}</Title>
        {dayName && <Title level={3} style={{color:'rgba(0, 0, 0, 0.5)'}}>{dayName.toUpperCase()}</Title>}       
        </div>
    )
};

export default Header;