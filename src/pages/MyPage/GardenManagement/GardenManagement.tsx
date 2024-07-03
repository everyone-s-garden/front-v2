import { Box, Flex, Spinner } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import MyPageNavBar from '../components/MyPageNavBar';
import UserFeedBack from '../components/UserFeedBack';
import UserProfile from '../components/UserProfile';
import { gardenManagementRoute } from '../constants';
import { Suspense } from 'react';

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
        <Suspense
          fallback={
            <Flex
              h={{ mobile: '100%', tablet: '100%' }}
              justifyContent="center"
              alignItems="center"
              w={{ mobile: '100%', tablet: '100%' }}
            >
              <Spinner
                speed="0.6s"
                size="xl"
                thickness="3px"
                color="orange.500"
              />
            </Flex>
          }
        >
          <Outlet />
        </Suspense>
      </Flex>
    </Box>
  );
};

export default GardenManagement;
