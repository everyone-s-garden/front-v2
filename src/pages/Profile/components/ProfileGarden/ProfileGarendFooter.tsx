import { Flex, Icon, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { LocationPrimaryIcon } from '@/assets/icons';

interface ProfileGardenFooterProps {
  garden: ManagedGarden;
}

const ProfileGardenFooter = ({ garden }: ProfileGardenFooterProps) => {
  const monthsUsing = dayjs(garden.useEndDate).diff(
    dayjs(garden.useStartDate),
    'month',
  );

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
        {garden.gardenName}
      </Text>
      <Text fontSize={{ mobile: '16px', tablet: '18px' }} fontWeight="medium">
        /
      </Text>
      <Text fontSize={{ mobile: '16px', tablet: '18px' }} fontWeight="medium">
        {monthsUsing}개월째
      </Text>
    </Flex>
  );
};

export default ProfileGardenFooter;
