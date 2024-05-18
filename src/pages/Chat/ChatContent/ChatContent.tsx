import { Box } from '@chakra-ui/react';
import ContentChatList from './components/ContentChatList';
import ContentHeader from './components/ContentHeader';
import ContentInput from './components/ContentInput';

const ChatContent = () => {
  return (
    <Box
      position={{ mobile: 'absolute', tablet: 'relative' }}
      h="100%"
      w="100%"
      bg="white"
      top="0"
      left="0"
      right="0"
      z-index="91"
    >
      <ContentHeader />
      <ContentChatList />
      <ContentInput />
    </Box>
  );
};

export default ChatContent;
