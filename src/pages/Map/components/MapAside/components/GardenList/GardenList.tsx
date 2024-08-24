import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { MapGardenNoImg } from '@/assets/images';
import GardenStatus from '../GardenStatus';
import useMapGardenDetailIdStore from '@/stores/useMapGardenDetailIdStore';
import useShowGardenDetailStore from '@/stores/useShowGardenDetailStore';

const GardenList = ({ gardens }: { gardens: Garden[] }) => {
  const { setGardenId } = useMapGardenDetailIdStore();
  const { setShowGardenDetail } = useShowGardenDetailStore();

  return gardens?.map((garden) => (
    <Box
      w={{ mobile: '100%', tablet: '352px' }}
      margin="0 auto"
      h={{ mobile: '', tablet: '170px' }}
      padding={{ mobile: '20px', tablet: '13px 0' }}
      borderBottom="1px solid"
      borderBottomColor="gray.100"
      key={garden.gardenId}
    >
      <Flex gap="17px">
        <Image
          w={{ mobile: '148px', tablet: '176px' }}
          h={{ mobile: '115px', tablet: '138px' }}
          borderRadius="8px"
          cursor="pointer"
          onClick={() => {
            setGardenId(garden.gardenId);
            setShowGardenDetail(true);
          }}
          src={garden.images[0] === null ? MapGardenNoImg : garden.images[0]}
          alt={garden.gardenName}
        />

        <Box w={{ mobile: '50%', tablet: '42.5%' }}>
          <GardenStatus type="normal" gardenStatus={garden.gardenStatus} />
          <Flex flexDir="column" gap={{ mobile: '0px', tablet: '6px' }}>
            <Text fontWeight="medium" fontSize="18px" isTruncated>
              {garden.gardenName}
            </Text>
            <Text
              fontWeight="regular"
              fontSize="16px"
              color="gray.700"
              isTruncated
            >
              {garden.size + ' ㎡'}
            </Text>
            <Text fontWeight="semibold" fontSize="16px" isTruncated>
              {isNaN(Number(garden.price))
                ? garden.price
                : `${Number(garden.price).toLocaleString()} 원`}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  ));
};

export default GardenList;
