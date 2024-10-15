import { Flex, Text } from '@chakra-ui/react';
import { HeadphonesIcon, TextBubbleGreenIcon } from '@/assets/icons';
import { userFeedbackFabStore } from '@/stores/userFeedbackFabStore';

const UserFeedBack = () => {
  const { setModalOpen } = userFeedbackFabStore();

  return (
    <Flex
      display={{ mobile: 'none', tablet: 'flex' }}
      cursor="pointer"
      mt="20px"
      bg="green.100"
      borderRadius="11px"
      w="204px"
      h="65px"
      align="center"
      justify="center"
      border="1px"
      borderColor="green.500"
      as="button"
      onClick={() => setModalOpen()}
    >
      <Flex
        mr="6.03px"
        aria-label="유저의 소리함"
        flexDir={'column'}
        align={'flex-start'}
      >
        <Text fontWeight="medium" fontSize="12px">
          제한사항이 있나요?
        </Text>
        <Text fontWeight="semiBold" fontSize="16px">
          유저의 소리함
        </Text>
      </Flex>
      <Flex>
        <TextBubbleGreenIcon />
        <HeadphonesIcon />
      </Flex>
    </Flex>
  );
};

export default UserFeedBack;
