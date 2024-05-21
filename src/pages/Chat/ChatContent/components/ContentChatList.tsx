import { Flex } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import ChatBubble from './ChatBubble';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useGetGardenChatContents } from '@/services/chat/query';
import { ChatContent, EnterChatRoom } from '@/services/chat/type';

interface ContentChatListProps {
  roomId: number;
  socketMessage: ChatContent[];
  productInfo: EnterChatRoom;
}

const ContentChatList = ({
  roomId,
  socketMessage,
  productInfo,
}: ContentChatListProps) => {
  const {
    data: chatContents,
    fetchNextPage,
    hasNextPage,
  } = useGetGardenChatContents({ roomId });
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: target } = useInfiniteScroll<HTMLDivElement>({
    fetchData: fetchPrevChatContents,
    hasNextPage,
  });
  const [prevScrollHeight, setPrevScrollHeight] = useState<number>(0);
  const { partnerId, partnerProfileImage } = productInfo;

  function fetchPrevChatContents() {
    if (!scrollRef.current) return;

    fetchNextPage();
    setPrevScrollHeight(scrollRef.current.scrollHeight);
  }

  useEffect(() => {
    if (!scrollRef.current) return;

    const scrollTop = scrollRef.current.scrollHeight - prevScrollHeight;
    scrollRef.current.scrollTop = scrollTop;
  }, [chatContents, prevScrollHeight]);

  useEffect(() => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [socketMessage]);

  if (!chatContents) return null;

  return (
    <Flex
      as="ul"
      p={{
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
      ref={scrollRef}
    >
      <div ref={target} />
      {chatContents.pages
        .slice()
        .reverse()
        .map(({ gardenChatMessageResponses }) =>
          gardenChatMessageResponses.map((chat) => (
            <ChatBubble
              key={`${chat.chatMessageId}${chat.memberId}${chat.createdAt}`}
              chat={chat}
              profile={partnerProfileImage}
              isMine={partnerId !== chat.memberId}
            />
          )),
        )}
      {socketMessage.map((chat) => (
        <ChatBubble
          key={`${chat.chatMessageId}${chat.memberId}${chat.createdAt}`}
          chat={chat}
          profile={partnerProfileImage}
          isMine={partnerId !== chat.memberId}
        />
      ))}
    </Flex>
  );
};

export default ContentChatList;
