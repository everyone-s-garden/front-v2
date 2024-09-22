import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import ChatList from './ChatList/ChatList';
import { HEADER_HEIGHT } from '@/components/Header/constants';

const Chat = () => {
  return (
    <Flex
      w="100%"
      h={{
        mobile: `calc(100vh - ${HEADER_HEIGHT.MOBILE_NAV}px - ${HEADER_HEIGHT.MOBILE}px)`,
        tablet: `calc(100vh - ${HEADER_HEIGHT.PC}px)`,
      }}
      maxW="1200px"
      bg={{ mobile: 'white', tablet: 'gray.50' }}
      m="0 auto"
    >
      <ChatList />
      <Outlet />
    </Flex>
  );
};

export default Chat;
