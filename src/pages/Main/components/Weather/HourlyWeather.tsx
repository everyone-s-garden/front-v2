/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Img, Show, styled } from '@chakra-ui/react';
import { LineChart, Line, XAxis, ResponsiveContainer } from 'recharts';
import getWeatherIcon from '../../utils/getWeatherIcon';
import WeatherTag from './WeatherTag';
import { HourlyWeatherData } from '@/services/weather/types';

const ForeignObject = styled('foreignObject');
const Text = styled('text');

const HourlyWeather = ({
  hourlyWeatherData,
}: {
  hourlyWeatherData: HourlyWeatherData['weatherTimeResponses'];
}) => {
  const CustomLabel = (props: any) => {
    const { index, x, y } = props;

    return (
      <g>
        <ForeignObject
          w={{ mobile: '20px', tablet: '40px' }}
          h={{ mobile: '20px', tablet: '40px' }}
          x={x - 10}
          y={y - 10}
          hideFrom="tablet"
        >
          <Img
            w="100%"
            h="100%"
            src={getWeatherIcon(hourlyWeatherData[index].skyStatus)}
          />
        </ForeignObject>
        <ForeignObject
          w={{ mobile: '20px', tablet: '40px' }}
          h={{ mobile: '20px', tablet: '40px' }}
          x={x - 20}
          y={y - 20}
          hideBelow="tablet"
        >
          <Img
            w="100%"
            h="100%"
            src={getWeatherIcon(hourlyWeatherData[index].skyStatus)}
          />
        </ForeignObject>
      </g>
    );
  };

  const CustomTick = (props: any) => {
    const { x, y, payload, index } = props;

    return (
      <>
        <Text
          fontSize={{ mobile: '12px', tablet: '18px' }}
          fontWeight="medium"
          textAnchor="middle"
          x={x}
          y={y}
        >
          {payload.value.slice(0, 2)}시
        </Text>
        <Text
          fontSize={{ mobile: '14px', tablet: '20px' }}
          fontWeight="semiBold"
          textAnchor="middle"
          x={x}
          y={y + 20}
          hideFrom="tablet"
        >
          {hourlyWeatherData[index].temperature}°
        </Text>
        <Text
          fontSize="20px"
          fontWeight="semiBold"
          textAnchor="middle"
          hideBelow="tablet"
          x={x}
          y={y + 35}
        >
          {hourlyWeatherData[index].temperature}°
        </Text>
      </>
    );
  };

  return (
    <Flex
      borderBottom="1px"
      borderColor="gray.100"
      flexDirection="column"
      gap="20px"
      p={{ mobile: '28px 18px', tablet: '44px 30px' }}
      h={{ mobile: '224px', tablet: '338px' }}
    >
      <WeatherTag>시간대별 기온</WeatherTag>

      <Show below="tablet">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={hourlyWeatherData}
            margin={{
              top: 20,
              right: 15,
              left: 15,
              bottom: 40,
            }}
          >
            <Line
              type="linear"
              dot={false}
              dataKey="temperature"
              stroke="#F77700"
              strokeWidth={1}
              label={<CustomLabel />}
            />
            <XAxis
              tickMargin={40}
              dataKey="fsctTime"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={<CustomTick />}
            />
          </LineChart>
        </ResponsiveContainer>
      </Show>
      <Show above="tablet">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={hourlyWeatherData}
            margin={{
              top: 35,
              right: 25,
              left: 25,
              bottom: 90,
            }}
          >
            <Line
              type="linear"
              dot={false}
              dataKey="temperature"
              stroke="#F77700"
              strokeWidth={1}
              label={<CustomLabel />}
            />
            <XAxis
              tickMargin={75}
              dataKey="fsctTime"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={<CustomTick />}
            />
          </LineChart>
        </ResponsiveContainer>
      </Show>
    </Flex>
  );
};

export default HourlyWeather;
