import { Flex, Image, Text } from '@chakra-ui/react';

import ProfileGardenStatus from './ProfileGardenStatus';
import ProfileIndividualSaleGardenFooter from './ProfileIndividualSaleGardenFooter';

interface ProfileIndividualSaleGardenProps {
  image: string;
}

const ProfileIndividualSaleGarden = ({
  image,
}: ProfileIndividualSaleGardenProps) => {
  return (
    <Flex
      pos="relative"
      flexDir="column"
      w={{ mobile: 'full', desktop: '230px' }}
      h={{ mobile: '265px', desktop: '' }}
      gap="10px"
    >
      <ProfileGardenStatus />
      <Image src={image} borderRadius="10px" alt="" h="160px" />
      <Text
        fontSize={{ mobile: '16px', desktop: '18px' }}
        fontWeight={{ mobile: 'bold', desktop: 'semiBold' }}
      >
        양주 공공텃밭
      </Text>

      <Text
        fontSize={{ mobile: '14px', desktop: '16px' }}
        color={{ mobile: 'sub', desktop: 'black' }}
        mt={{ mobile: '-2px', desktop: '0px' }}
      >
        평당 15,000원
      </Text>

      <ProfileIndividualSaleGardenFooter />
    </Flex>
  );
};

export default ProfileIndividualSaleGarden;
