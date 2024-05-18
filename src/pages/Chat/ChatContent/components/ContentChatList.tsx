import { Flex } from '@chakra-ui/react';
import ChatBubble from './ChatBubble';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

const ContentChatList = () => {
  const { ref } = useInfiniteScroll<HTMLDivElement>({
    fetchData: () => {},
    hasNextPage: true,
  });

  return (
    <Flex
      as="ul"
      padding={{
        mobile: '181px 20px 92px',
        tablet: '86px 20px 200px',
      }}
      h="100%"
      flexDirection="column"
      overflowY="scroll"
      gap="24px"
      border={{
        mobile: '0',
        tablet: '1px solid',
      }}
      borderColor={{ mobile: '', tablet: 'gray.200' }}
    >
      <div ref={ref} />
      <ChatBubble />
    </Flex>
  );
};

export default ContentChatList;
