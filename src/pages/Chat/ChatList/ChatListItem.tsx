import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { AvatarComponent } from '@/components';

const ChatListItem = () => {
  return (
    <Flex
      as="li"
      bg="white"
      alignItems="center"
      justifyContent="space-between"
      w="100%"
      p={{ mobile: '12px 20px', tablet: '12px 16px' }}
      cursor="pointer"
      borderBottom={{ mobile: '1px solid', tablet: 'none' }}
      rounded={{ mobile: 'none', tablet: '10px' }}
      borderColor="gray.200"
      _hover={{ backgroundColor: 'orange.300' }}
    >
      <Flex alignItems="center" gap="14px">
        <AvatarComponent
          rounded="50%"
          width="56px"
          height="56px"
          flexShrink={0}
        />
        <Box>
          <Flex alignItems="center" gap="6px">
            <Text fontWeight="700" fontSize="18px">
              nickname
            </Text>
            <Text fontWeight="regular" fontSize="14px">
              씨앗 · 1분전
            </Text>
          </Flex>
          <Text
            fontWeight="500"
            fontSize="16px"
            overflow="hidden"
            display="-webkit-box"
          >
            내용
          </Text>
        </Box>
      </Flex>
      <Image rounded="10px" w="72px" h="72px" flexShrink={0} />
    </Flex>
  );
};

export default ChatListItem;
