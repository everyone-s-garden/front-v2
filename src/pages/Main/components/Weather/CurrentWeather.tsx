import { Flex } from '@chakra-ui/react';

const CurrentWeather = () => {
  return (
    <Flex
      p={{ mobile: '25px 25px 25px 15px', tablet: '16px 60px 16px 50px' }}
      gap="15px"
      h={{ mobile: '100px', tablet: '148px' }}
      justifyContent="space-between"
      bgColor="#fff4e7"
      overflow="hidden"
    ></Flex>
  );
};

export default CurrentWeather;
