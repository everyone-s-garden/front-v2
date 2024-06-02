import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { cloudyIcon } from '@/assets/icons/weather';
import { useGetWeatherByRegion } from '@/services/weather/query';
import { useMyLocationStore } from '@/stores/myLocationStore';

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
      p={{ mobile: '25px 25px 25px 15px', tablet: '16px 60px 16px 50px' }}
      gap="15px"
      h={{ mobile: '100px', tablet: '148px' }}
      justifyContent="space-between"
      bgColor="#fff4e7"
      overflow="hidden"
    >
      <Image src={cloudyIcon} h={{ mobile: '80px', tablet: '130px' }} />
      <Flex alignItems="center" justifyContent="center" gap="22px">
        <Text
          fontSize={{ mobile: '32px', tablet: '64px' }}
          fontWeight="semiBold"
        >
          {currentWeather.temperatureValue}°
        </Text>
        <Box w="1px" h={{ mobile: '100%', tablet: '77px' }} bg="gray.200" />
        <Text fontWeight="medium" fontSize={{ mobile: '14px', tablet: '20px' }}>
          {currentWeather.skyValue}
        </Text>
      </Flex>
    </Flex>
  );
};

export default CurrentWeather;
