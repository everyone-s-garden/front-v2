import { Box, Flex, Image, Text } from '@chakra-ui/react';
import getBackgroundColorFromWeather from '../../utils/getBackgroundColorFromWeather';
import getWeatherIcon from '../../utils/getWeatherIcon';
import { useGetWeatherByRegion } from '@/services/weather/query';
import { useMyLocationStore } from '@/stores/myLocationStore';

const BLACK_COLOR_VALUE = ['맑음', '구름많음', '흐림'];

const CurrentWeather = () => {
  const myLocation = useMyLocationStore((state) => state.myLocation);
  const { data } = useGetWeatherByRegion();

  if (!data) return null;

  const currentWeather = data.find(
    (weather) => weather.regionName === myLocation.position,
  );

  if (!currentWeather) return null;

  return (
    <Flex
      p={{ mobile: '0 25px', tablet: '0 50px' }}
      gap="15px"
      h={{ mobile: '100px', tablet: '148px' }}
      justifyContent="space-between"
      alignItems="center"
      bgColor={getBackgroundColorFromWeather(currentWeather.skyValue)}
      overflow="hidden"
    >
      <Image
        alignSelf="flex-end"
        src={getWeatherIcon(currentWeather.skyValue, true)}
        h={{
          mobile: ['맑음', '구름많음'].includes(currentWeather.skyValue)
            ? '60px'
            : '85px',
          tablet: '130px',
        }}
      />
      <Flex alignItems="center" justifyContent="center" gap="22px">
        <Text
          fontSize={{ mobile: '32px', tablet: '64px' }}
          fontWeight="semiBold"
          color={
            BLACK_COLOR_VALUE.includes(currentWeather.skyValue)
              ? 'black'
              : 'white'
          }
        >
          {currentWeather.temperatureValue}°
        </Text>
        <Box w="1px" h="77px" bg="gray.200" />
        <Text
          fontWeight="medium"
          fontSize={{ mobile: '14px', tablet: '20px' }}
          color={
            BLACK_COLOR_VALUE.includes(currentWeather.skyValue)
              ? 'black'
              : 'white'
          }
        >
          {currentWeather.skyValue}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CurrentWeather;
