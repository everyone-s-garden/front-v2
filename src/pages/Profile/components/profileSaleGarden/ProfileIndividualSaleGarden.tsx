import { Flex, Image, Text } from '@chakra-ui/react';

import { Dispatch, SetStateAction } from 'react';
import ProfileGardenStatus from './ProfileGardenStatus';
import ProfileIndividualSaleGardenFooter from './ProfileIndividualSaleGardenFooter';

interface ProfileIndividualSaleGardenProps {
  garden: GardenForSale | undefined;
  refetchGardensForSale: () => void;
  onOpen?: () => void;
  setContact: Dispatch<SetStateAction<string>>;
  setGardenId: Dispatch<SetStateAction<number | null>>;
  setChatRoomId: Dispatch<SetStateAction<number>>;
}

const ProfileIndividualSaleGarden = ({
  garden,
  refetchGardensForSale,
  onOpen,
  setContact,
  setGardenId,
  setChatRoomId,
}: ProfileIndividualSaleGardenProps) => {
  return (
    <Flex
      pos="relative"
      flexDir="column"
      w={{ mobile: 'full', tablet: 'full', dektop: '210px' }}
      h={{ mobile: '265px', tablet: 'full' }}
      gap="10px"
    >
      <ProfileGardenStatus garden={garden} />
      <Image src={garden?.images[0]} borderRadius="10px" alt="" h="160px" />
      <Text
        fontSize={{ mobile: '16px', tablet: '18px' }}
        fontWeight={{ mobile: 'bold', tablet: 'semiBold' }}
      >
        {garden?.gardenName}
      </Text>

      <Text
        fontSize={{ mobile: '14px', tablet: '16px' }}
        color={{ mobile: 'sub', tablet: 'black' }}
        mt={{ mobile: '-2px', tablet: '0px' }}
      >
        {Number(garden?.price).toLocaleString()} 원
      </Text>

      <ProfileIndividualSaleGardenFooter
        garden={garden}
        refetchGardensForSale={refetchGardensForSale}
        onOpen={onOpen}
        setContact={setContact}
        setGardenId={setGardenId}
        setChatRoomId={setChatRoomId}
      />
    </Flex>
  );
};

export default ProfileIndividualSaleGarden;
