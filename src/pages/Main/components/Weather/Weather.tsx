import { Box, Flex } from '@chakra-ui/react';
import ItemTitle from '../ItemTitle';
import CurrentWeather from './CurrentWeather';
import NextWeather from './NextWeather';
import WeatherHeader from './WeatherHeader';

const Weather = () => {
  return (
    <Flex flexDir="column" m="0 auto" px="20px" maxW="1194px" w="100%">
      <ItemTitle>위치에 따른 날씨를 확인하고 작물을 키워요!</ItemTitle>
      <Box border="1px" borderColor="gray.100" rounded="10px">
        <WeatherHeader />
        <CurrentWeather />
        <NextWeather />
      </Box>
    </Flex>
  );
};

export default Weather;
