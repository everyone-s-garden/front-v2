import { Flex, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { AvatarComponent } from '@/components';
import { ChatContent } from '@/services/chat/type';

dayjs.locale('ko');

interface ChatBubbleProps {
  chat: ChatContent;
  isMine: boolean;
  profile: string;
}

const ChatBubble = ({ chat, profile, isMine }: ChatBubbleProps) => {
  const { contents, createdAt, readOrNot } = chat;
  const formattedTime = dayjs(createdAt).format('A hh:mm');

  return (
    <Flex
      gap="16px"
      justifyContent={isMine ? 'flex-end' : 'flex-start'}
      alignItems="center"
    >
      {!isMine && (
        <AvatarComponent
          width={{ mobile: '38px', tablet: '52px' }}
          height={{ mobile: '38px', tablet: '52px' }}
          src={profile}
        />
      )}

      <Flex
        gap={{ mobile: '8px', tablet: '10px' }}
        flexDirection={isMine ? 'row-reverse' : 'row'}
      >
        <Text
          maxW="200px"
          wordBreak="break-all"
          fontSize="16px"
          fontWeight="medium"
          h="fit-content"
          p={{ mobile: '8px 12px', tablet: '10px 13px' }}
          bg={isMine ? 'green.300' : 'green.100'}
          rounded="10px"
          display="flex"
        >
          {contents}
        </Text>
        <Flex flexDirection="column" justifyContent="flex-end">
          {isMine && !readOrNot && (
            <Text
              fontSize={{ mobile: '10px', tablet: '12px' }}
              color="green.600"
              flexShrink="0"
              alignSelf="flex-end"
              lineHeight="10px"
            >
              1
            </Text>
          )}
          <Text
            fontSize={{ mobile: '12px', tablet: '14px' }}
            color="gray.400"
            flexShrink="0"
            alignSelf="flex-end"
          >
            {formattedTime}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ChatBubble;
