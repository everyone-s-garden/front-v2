import { Box, Flex, Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import ItemTitle from '../ItemTitle';
import CurrentWeather from './CurrentWeather';
import NextWeather from './NextWeather';
import WeatherHeader from './WeatherHeader';

const Weather = () => {
  return (
    <Box px="20px">
      <Flex flexDir="column" m="0 auto" maxW="1194px" w="100%">
        <ItemTitle>위치에 따른 날씨를 확인하고 작물을 키워요!</ItemTitle>
        <Box border="1px" borderColor="gray.100" rounded="10px">
          <WeatherHeader />
          <Suspense
            fallback={
              <Flex
                h={{ mobile: '100px', tablet: '148px' }}
                justifyContent="center"
                alignItems="center"
                bg="gray.50"
              >
                <Spinner
                  speed="0.6s"
                  size="md"
                  thickness="3px"
                  color="orange.500"
                />
              </Flex>
            }
          >
            <CurrentWeather />
          </Suspense>
          <Suspense>
            <NextWeather />
          </Suspense>
        </Box>
      </Flex>
    </Box>
  );
};

export default Weather;
