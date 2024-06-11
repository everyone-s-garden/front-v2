import { Box, Flex, Text, createIcon } from '@chakra-ui/react';
import { useGetGardenChatRooms } from '@/services/chat/query';

const ClickIcon = createIcon({
  displayName: 'ClickIcon',
  viewBox: '0 0 33 33',
  path: (
    <path
      d="M1.125 16.5H6.25M16.5 1.125V6.25M9.325 9.325L5.56667 5.56667M23.675 9.325L27.4333 5.56667M9.325 23.675L5.56667 27.4333M16.5 16.5L31.875 21.625L25.0417 25.0417L21.625 31.875L16.5 16.5Z"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});

const StartContent = () => {
  const { data } = useGetGardenChatRooms();

  if (!data) return null;

  return (
    <Box
      bg="white"
      w="100%"
      position="relative"
      display={{ mobile: 'none', tablet: 'block' }}
    >
      <Box
        w="100%"
        h="86px"
        bg="orange.100"
        borderLeft="1px solid"
        borderColor="orange.200"
        position="absolute"
      />
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        border="1px solid"
        borderColor="gray.200"
        h="100%"
      >
        <ClickIcon
          stroke="gray.700"
          width="41px"
          height="41px"
          marginBottom="23px"
        />
        <Text
          fontSize="16px"
          fontWeight="semiBold"
          lineHeight="25px"
          textAlign="center"
          color="gray.700"
        >
          <>
            대화창을 클릭하여
            <br />
            채팅을 시작해보세요
          </>
        </Text>
      </Flex>
    </Box>
  );
};

export default StartContent;
