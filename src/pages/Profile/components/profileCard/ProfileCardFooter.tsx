import { Flex, Icon, Text } from '@chakra-ui/react';
import { SeedIcon } from '@/assets/icons';

interface ProfileCardFooterProps {
  memberMannerGrade: string;
}

const ProfileCardFooter = ({ memberMannerGrade }: ProfileCardFooterProps) => {
  return (
    <Flex
      w="full"
      gap={{ mobile: '12px', tablet: '9px', desktop: '12px' }}
      justifyContent="center"
      alignItems="center"
      mx="auto"
      bgColor="orange.500"
      h={{ mobile: '48px', tablet: '43.8px', desktop: '56px' }}
      pos="absolute"
      bottom="0"
    >
      <Icon
        as={SeedIcon}
        w={{ mobile: '38px', tablet: '29.718px', desktop: '38px' }}
        h={{ mobile: '36px', tablet: '28.159px', desktop: '36px' }}
      />
      <Text
        fontSize={{ mobile: '16px', tablet: '12.51px', desktop: '16px' }}
        color="white"
        fontWeight="semiBold"
      >
        {/* 씨앗 등급 */}
        {memberMannerGrade}
      </Text>
    </Flex>
  );
};

export default ProfileCardFooter;
