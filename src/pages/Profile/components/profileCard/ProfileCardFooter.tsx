import { Flex, Icon, Text } from '@chakra-ui/react';
import { SeedIcon } from '@/assets/icons';

const ProfileCardFooter = () => {
  return (
    <Flex
      w="full"
      gap="12px"
      justifyContent="center"
      alignItems="center"
      mx="auto"
      bgColor="orange.500"
      h={{ mobile: '48px', tablet: '56px' }}
      pos="absolute"
      bottom="0"
    >
      <Icon as={SeedIcon} w="38px" h="36px" />
      <Text fontSize="16px" color="white" fontWeight="semiBold">
        씨앗 등급
      </Text>
    </Flex>
  );
};

export default ProfileCardFooter;
