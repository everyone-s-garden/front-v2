import { Box, Flex, Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MyPageNavBar from './components/MyPageNavBar';
import UserFeedBack from './components/UserFeedBack';
import UserProfile from './components/UserProfile';

export default function MyPageSubLayout() {
  return (
    <Box w="100%" h="100%">
      <MyPageNavBar />
      <Flex
        mt={{ mobile: '24px', tablet: '60px' }}
        w="100%"
        maxW="1040px"
        mx="auto"
        px="20px"
      >
        <Box
          mr={{ mobile: '0px', tablet: '56px' }}
          display={{ mobile: 'none', tablet: 'block' }}
        >
          <UserProfile />
          <UserFeedBack />
        </Box>

        <Suspense
          fallback={
            <Flex h="100%" justifyContent="center" alignItems="center" w="100%">
              <Spinner
                speed="0.6s"
                size="xl"
                thickness="3px"
                color="green.500"
              />
            </Flex>
          }
        >
          <Outlet />
        </Suspense>
      </Flex>
    </Box>
  );
}
