import { Flex, Text } from '@chakra-ui/react';
import { AvatarComponent } from '@/components';

const ChatBubble = () => {
  return (
    <Flex gap="16px" justifyContent="flex-end">
      <AvatarComponent
        width={{ mobile: '38px', tablet: '52px' }}
        height={{ mobile: '38px', tablet: '52px' }}
      />
      <Flex gap={{ mobile: '8px', tablet: '10px' }}>
        <Text
          maxW="200px"
          wordBreak="break-all"
          fontSize="16px"
          fontWeight="medium"
          p={{ mobile: '8px 12px', tablet: '10px 13px' }}
          bg="orange.400"
          rounded="10px"
          display="flex"
        >
          안녕하세요
        </Text>
        <Text
          fontSize={{ mobile: '12px', tablet: '16px' }}
          color="gray.400"
          flexShrink="0"
          alignSelf="flex-end"
          order="-1"
        >
          12시 10분
        </Text>
      </Flex>
    </Flex>
  );
};

export default ChatBubble;
