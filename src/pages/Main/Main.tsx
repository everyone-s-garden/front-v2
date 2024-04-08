import { Flex } from '@chakra-ui/react';
import Banner from './components/Banner';
import MonthlyCrop from './components/MonthlyCrop';
import RecentPosts from './components/RecentPosts/RecentPosts';
import Weather from './components/Weather/Weather';

const Main = () => {
  return (
    <Flex flexDir="column" gap={{ mobile: '36px', tablet: '80px' }}>
      <Banner />
      <RecentPosts />
      <MonthlyCrop />
      <Weather />
    </Flex>
  );
};

export default Main;
