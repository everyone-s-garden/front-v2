import { Flex, Img, Text } from '@chakra-ui/react';
import getWeatherIcon from '../../utils/getWeatherIcon';
import WeatherTag from './WeatherTag';
import { WeeklyWeatherData } from '@/services/weather/types';

const WEEK = ['일', '월', '화', '수', '목', '금', '토'];

const WeeklyWeather = ({
  weeklyWeatherData,
}: {
  weeklyWeatherData: WeeklyWeatherData['status'];
}) => {
  const today = new Date().getDay();

  console.log(weeklyWeatherData);

  return (
    <Flex
      flexDirection="column"
      gap="20px"
      p={{ mobile: '28px 18px', tablet: '44px 30px' }}
      h={{ mobile: '180px', tablet: '275px' }}
    >
      <WeatherTag>주간별 날씨</WeatherTag>
      <Flex justifyContent="space-between">
        {weeklyWeatherData.map((status, index) => (
          <Flex
            flexDirection="column"
            alignItems="center"
            gap={{ mobile: '18px', tablet: '34px' }}
          >
            <Img
              w={{ mobile: '30px', tablet: '48px' }}
              src={getWeatherIcon(status)}
            />
            <Text
              fontSize={{ mobile: '14px', tablet: '18px' }}
              fontWeight="medium"
            >
              {WEEK[(today + index + 1) % 7]}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default WeeklyWeather;
