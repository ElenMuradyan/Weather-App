import {Typography} from "antd";
import './index.css';

const { Title } = Typography;

const Header = () => {
    return (
        <div className="header_container">
<Title level={3} style={{color:'rgba(0, 0, 0, 0.5)'}}>YEREVAN,ARMENIA</Title>
        </div>
    )
};

export default Header;