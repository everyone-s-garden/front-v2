import { Box, Flex } from '@chakra-ui/react';
import Banner from './components/Banner';
import RecentPosts from './components/RecentPosts';

const Main = () => {
  return (
    <Flex flexDir="column" gap={{ mobile: '36px', tablet: '80px' }}>
      <Banner />
      <Box m="0 auto" flexDir="column" px="20px">
        <RecentPosts />
      </Box>
    </Flex>
  );
};

export default Main;
