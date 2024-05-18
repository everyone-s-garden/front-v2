import { Flex, Tab, TabIndicator, TabList, Tabs, Text } from '@chakra-ui/react';
import ChatListItem from './ChatListItem';

const ChatList = () => {
  return (
    <Flex
      h="100%"
      w={{ mobile: '100%', tablet: '408px' }}
      flexDirection="column"
      position="relative"
      flexShrink={0}
      overflow="hidden"
    >
      <Text
        fontSize="24px"
        fontWeight="semiBold"
        display={{ mobile: 'none', tablet: 'flex' }}
        alignItems="center"
        flexShrink={0}
        h="86px"
        p="17px"
      >
        채팅
      </Text>
      <Tabs position="relative" variant="unstyled" bg="white" h="62px">
        <TabList
          h="100%"
          w="100%"
          borderBottom="4px solid"
          borderColor="gray.50"
        >
          <Tab w="100%">내 주변 분양</Tab>
          <Tab w="100%">내 주변 분양</Tab>
        </TabList>
        <TabIndicator mt="-4px" h="4px" bg="orange.500" />
      </Tabs>
      <Flex
        as="ul"
        flexDirection="column"
        overflowY="auto"
        padding={{ mobile: '0', tablet: '6px 7px' }}
        gap={{ mobile: '0', tablet: '6px' }}
      >
        <ChatListItem />
        <ChatListItem />
        <ChatListItem />
      </Flex>
    </Flex>
  );
};

export default ChatList;
