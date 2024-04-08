import { Flex } from '@chakra-ui/react';
import Banner from './components/Banner';
import MonthlyCrop from './components/MonthlyCrop';
import RecentPosts from './components/RecentPosts/RecentPosts';

const Main = () => {
  return (
    <Flex flexDir="column" gap={{ mobile: '36px', tablet: '80px' }}>
      <Banner />
      <RecentPosts />
      <MonthlyCrop />
    </Flex>
  );
};

export default Main;
