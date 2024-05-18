import { Flex } from '@chakra-ui/react';
import Banner from './components/Banner';
import MonthlyCrop from './components/MonthlyCrop';
import RecentPosts from './components/RecentPosts/RecentPosts';
import Weather from './components/Weather/Weather';

const Main = () => {
  return (
    <Flex
      flexDir="column"
      pb={{ mobile: '50px', tablet: '120px' }}
      gap={{ mobile: '36px', tablet: '80px' }}
    >
      <Banner />
      <RecentPosts />
      <MonthlyCrop />
      <Weather />
    </Flex>
  );
};

export default Main;
