import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { AvatarComponent } from '@/components';
import { ChatRoom } from '@/services/chat/type';

const ChatListItem = ({ chat }: { chat: ChatRoom }) => {
  const navigate = useNavigate();
  const { partnerInfo, recentContents, postInfo, chatRoomId } = chat;
  const { imageUrl, nickName } = partnerInfo;

  const handleEnterChatRoom = () => {
    navigate(`/chat/${chatRoomId}`);
  };

  return (
    <Flex
      as="li"
      bg="white"
      alignItems="center"
      justifyContent="space-between"
      p={{ mobile: '12px 20px', tablet: '12px 16px' }}
      cursor="pointer"
      borderBottom={{ mobile: '1px solid', tablet: 'none' }}
      rounded={{ mobile: 'none', tablet: '10px' }}
      borderColor="gray.200"
      _hover={{ backgroundColor: 'orange.300' }}
      onClick={handleEnterChatRoom}
    >
      <Flex alignItems="center" gap="14px">
        <AvatarComponent
          rounded="50%"
          width="56px"
          height="56px"
          flexShrink={0}
          src={imageUrl}
        />
        <Box>
          <Flex alignItems="center" gap="6px">
            <Text fontWeight="700" fontSize="18px">
              {nickName}
            </Text>
            <Text fontWeight="regular" fontSize="14px">
              씨앗 · 1분전
            </Text>
          </Flex>
          <Text
            w={{ mobile: 'calc(100vw - 270px)', tablet: '200px' }}
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            fontWeight="500"
            fontSize="16px"
            overflow="hidden"
          >
            {recentContents}
          </Text>
        </Box>
      </Flex>
      <Image
        rounded="10px"
        w="72px"
        h="72px"
        flexShrink={0}
        src={postInfo.images[0]}
      />
    </Flex>
  );
};

export default ChatListItem;
