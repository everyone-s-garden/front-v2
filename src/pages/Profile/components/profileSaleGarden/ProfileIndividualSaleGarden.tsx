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
      w={{ mobile: 'full', tablet: 'full', dektop: '210px' }}
      h={{ mobile: '265px', tablet: 'full' }}
      gap="10px"
    >
      <ProfileGardenStatus />
      <Image src={image} borderRadius="10px" alt="" h="160px" />
      <Text
        fontSize={{ mobile: '16px', tablet: '18px' }}
        fontWeight={{ mobile: 'bold', tablet: 'semiBold' }}
      >
        양주 공공텃밭
      </Text>

      <Text
        fontSize={{ mobile: '14px', tablet: '16px' }}
        color={{ mobile: 'sub', tablet: 'black' }}
        mt={{ mobile: '-2px', tablet: '0px' }}
      >
        평당 15,000원
      </Text>

      <ProfileIndividualSaleGardenFooter />
    </Flex>
  );
};

export default ProfileIndividualSaleGarden;
