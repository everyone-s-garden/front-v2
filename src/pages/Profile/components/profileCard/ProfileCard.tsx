import { Box, Icon, Show } from '@chakra-ui/react';
import { ShareIcon } from '@/assets/icons';
import MobileProfile from './MobileProfile';
import TabletAndPCProfile from './TabletAndPCProfile';

interface ProfileCardProps {
  userInfo: UserInfo;
}

const ProfileCard = ({ userInfo }: ProfileCardProps) => {
  return (
    <Box
      pos="relative"
      w={{ mobile: 'full', tablet: '160px', desktop: '204px' }}
      h={{ mobile: '144px', tablet: '218px', desktop: '280px' }}
      borderRadius="10px"
      bgColor="gray.50"
      mt={{ mobile: '21px', tablet: '0px' }}
      mb={{ mobile: '96px', tablet: '0px' }}
      pt={{ mobile: '20px', tablet: '36px', desktop: '48px' }}
      pb={{ mobile: '20px', tablet: '27px', desktop: '40px' }}
      pl={{ mobile: '20px', tablet: '16px', desktop: '30px' }}
      pr={{ mobile: '40px', tablet: '16px', desktop: '30px' }}
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
      <Show below="tablet">
        <MobileProfile userInfo={userInfo} />
      </Show>
      <Show above="tablet">
        <TabletAndPCProfile userInfo={userInfo} />
      </Show>
    </Box>
  );
};

export default ProfileCard;
