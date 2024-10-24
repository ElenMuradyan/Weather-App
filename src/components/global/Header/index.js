import { Typography } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import './index.css';

const { Title } = Typography;

const Header = () => {
    const [ urlState, setUrlState] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        setUrlState(location.pathname !== '/');
    },[location.pathname]);

    return (
        <div className="header_container">
        {urlState && <Link to={'/'} className="title">
        <Title level={5} style={{color:'rgba(0, 0, 0, 0.207)'}} className="link">MAIN PAGE</Title>
        </Link>}
        <Title level={3} style={{color:'rgba(0, 0, 0, 0.5)'}}>YEREVAN,ARMENIA</Title>
        </div>
    )
};

export default Header;