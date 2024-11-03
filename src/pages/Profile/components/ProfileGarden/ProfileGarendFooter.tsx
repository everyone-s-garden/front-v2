import { Flex, Icon, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { LocationPrimaryIcon } from '@/assets/icons';

interface ProfileGardenFooterProps {
  garden: ManagedGarden;
}

const ProfileGardenFooter = ({ garden }: ProfileGardenFooterProps) => {
  return (
    <Flex
      alignItems="center"
      borderBottomRadius="10px"
      h="60px"
      bgColor="green.100"
      gap="12px"
      pl="20px"
    >
      <Text fontSize={{ mobile: '16px', tablet: '18px' }} fontWeight="medium">
        {dayjs(garden.createdAt).format('M월 D일')}
      </Text>
      <Text fontSize={{ mobile: '16px', tablet: '18px' }} fontWeight="medium">
        /
      </Text>
      <Icon as={LocationPrimaryIcon} w="20px" h="20px" />
      <Text fontSize={{ mobile: '16px', tablet: '18px' }} fontWeight="medium">
        {garden.myManagedGardenName}
      </Text>
    </Flex>
  );
};

export default ProfileGardenFooter;
