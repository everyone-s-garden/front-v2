import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import MyPageNavBar from '../components/MyPageNavBar';
import UserFeedBack from '../components/UserFeedBack';
import UserProfile from '../components/UserProfile';
import { gardenManagementRoute } from '../constants';

const GardenManagement = () => {
  return (
    <Box w="100%">
      <MyPageNavBar route={gardenManagementRoute} />
      <Flex
        mt={{ mobile: '24px', tablet: '60px' }}
        w="100%"
        maxW="1000px"
        ml="auto"
        mr="auto"
      >
        <Box mr={{ mobile: '0px', tablet: '56px' }}>
          <UserProfile />
          <UserFeedBack />
        </Box>
        <Outlet />
      </Flex>
    </Box>
  );
};

export default GardenManagement;
