import { Flex, Icon, Text } from '@chakra-ui/react';
import { LocationPrimaryIcon } from '@/assets/icons';

const ProfileGarendFooter = () => {
  return (
    <Flex
      alignItems="center"
      borderBottomRadius="10px"
      h="60px"
      bgColor="orange.100"
      gap="12px"
      pl="20px"
    >
      <Icon as={LocationPrimaryIcon} w="20px" h="20px" />
      <Text fontSize={{ mobile: '16px', tablet: '18px' }} fontWeight="medium">
        양평 씨앗 농장
      </Text>
      <Text fontSize={{ mobile: '16px', tablet: '18px' }} fontWeight="medium">
        /
      </Text>
      <Text fontSize={{ mobile: '16px', tablet: '18px' }} fontWeight="medium">
        3개월째
      </Text>
    </Flex>
  );
};

export default ProfileGarendFooter;
