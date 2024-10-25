import { mainPageWeatherHoursFunction } from '../../../core/services/mainPageWeather';
import { useEffect, useState } from 'react';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Group } from '@visx/group';
import { AreaClosed } from '@visx/shape';
import { AxisBottom } from '@visx/axis';
import { LinearGradient } from '@visx/gradient';
import { height, width, margin, Colors } from '../../../core/utils/constants';
import { Flex } from 'antd';
import Loading from '../Loading';

import './index.css';

const CurrentWeatherHours = () => {
    const [data, setData] = useState([]);

    const dataFunction = async () => {
        const weatherData = await mainPageWeatherHoursFunction();
        setData(weatherData);
    };

    useEffect(() => {
        dataFunction();
    }, []);

    const xScale = scaleBand({
        domain: data.map(d => d.hour),
        padding: 0.1,
    });

    const maxValue = data.length ? Math.max(...data.map(d => d.temperature)) : 0; 
    const yScale = scaleLinear({
        domain: [0, maxValue],
        nice: true,
    });

    xScale.range([0, width]);
    yScale.range([height, 0]);

    if (!data.length) {
        return <Loading/>;
    }

    const x = d => xScale(d.hour);
    const y = d => yScale(d.temperature);

    return (
        <Flex justify='space-between' align='center' className='hours_and_diagram_container'>
<Flex className='diagram_container'>
<svg>
   <Group top={margin.top}>
       <AxisBottom
          scale={xScale}
          left={-50}
          top={height+3}
          stroke={'#1b1a1e'}
          tickLabelProps={() => ({
            fill: 'black',
            fontSize: 10,
            textAnchor: 'middle',
          })} 
          strokeWidth={1}
          tickTextFill={'#1b1a1e'}
        />
       <AreaClosed
          data={data}
          yScale={yScale}
          x={x}
          y={y}
          fill={"url(#gradient)"}        
          />
        <LinearGradient
            from='#fbc2eb'
            to='rgba(0, 0, 0, 0.385)'
            id='gradient'
        />
   </Group>
</svg>
<span style={{color:Colors.whiteOpacity}}>Temperature Diagram For Nearly Hours</span>
</Flex>
        <div className='hours_container'>
            {data.map((item, idx) => {
                const { temperature, weather, iconUrl, rainProbability, hour} = item;
                return( <Flex justify="center" align="center" vertical key={idx} className='hour'>
                        <span>{hour}</span>
                        <img src={iconUrl} alt={weather}/>
                        <Flex align="center"><img src={`http://openweathermap.org/img/wn/10d@2x.png`} alt="Rain" style={{width:40}}/><span>{rainProbability}%</span></Flex>
                        <span>{Math.round(temperature)}°C</span>
                        </Flex>)
       })}
       </div>
        </Flex>
    );
};

export default CurrentWeatherHours;





