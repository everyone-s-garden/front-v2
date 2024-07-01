import { Box, Icon } from '@chakra-ui/react';
import { ShareIcon } from '@/assets/icons';
import ProfileCardBody from './ProfileCardBody';
import ProfileCardFooter from './ProfileCardFooter';

const ProfileCard = () => {
  return (
    <Box
      pos="relative"
      w={{ mobile: 'full', tablet: '160px', desktop: '204px' }}
      h={{ mobile: '166px', tablet: '218px', desktop: '280px' }}
      borderRadius="10px"
      border="1px solid"
      borderColor="orange.500"
      bgColor="orange.100"
      mt={{ mobile: '21px', tablet: '0px' }}
      mb={{ mobile: '96px', tablet: '0px' }}
      overflow="hidden"
      flexShrink="0"
    >
      <Icon
        as={ShareIcon}
        pos="absolute"
        top="12px"
        right="16px"
        cursor="pointer"
        display={{ mobile: 'none', tablet: 'block' }}
      />

      <ProfileCardBody />
      <ProfileCardFooter />
    </Box>
  );
};

export default ProfileCard;
