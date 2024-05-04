import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import ChatList from './ChatList/ChatList';

const Chat = () => {
  return (
    <Flex
      w="100%"
      h="calc(100vh - 108px)"
      maxW="1200px"
      bg={{ mobile: 'white', tablet: 'orange.100' }}
      m="0 auto"
    >
      <ChatList />
      <Outlet />
    </Flex>
  );
};

export default Chat;
