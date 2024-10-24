import { Flex, Typography } from "antd";
import { Colors } from "../../../core/utils/constants";
import './index.css'

const { Title } = Typography;


const Hour = ({ data }) => {
const { day, hour, temperature, iconUrl, weather, windDirection, windSpeed, max, min} = data
return(
<div className="hour_weather_container">
             <Flex justify="space-between" align='center' className="flex_container">
             <Flex align="center" vertical>
             <Title level={3} style={{color:Colors.whiteOpacity,margin: '0', padding: '0' }}>{day}</Title>
             <Title level={3} style={{color:Colors.whiteOpacity,margin: '0', padding: '0'}}>{hour}<span style={{fontSize:10}}>AM</span></Title>
             </Flex>
             <Flex vertical align="center" justify="center">
                 <Title level={3} style={{margin: '0', padding: '0', color:'white'}}>{temperature}°C</Title>
                 <img src={iconUrl}></img>
                 <Title level={4} style={{color:'white'}}>{weather.charAt(0).toUpperCase() + weather.slice(1).toLowerCase()}</Title>
            </Flex>
             <Flex justify="center" align="flex-end" vertical>
             <Title level={5} style={{color:Colors.whiteOpacity}}>Wind direction:{windDirection}</Title>             
             <Title level={5} style={{color:Colors.whiteOpacity}}>Wind speed:{windSpeed}</Title>
             <Title level={5} style={{color:Colors.whiteOpacity}}>Max:{max}</Title>
             <Title level={5} style={{color:Colors.whiteOpacity}}>Min:{min}</Title>
             </Flex>
             </Flex>
         </div>
)
}

export default Hour;