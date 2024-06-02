import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { MapGardenNoImg } from '@/assets/images';
import GardenStatus from './GardenStatus';
import MapGardenDetail from './MapGardenDetail';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import useMapGardenDetailIdStore from '@/stores/useMapGardenDetailIdStore';

interface MapGardensProps {
  showGardenDetail: boolean;
  setShowGardenDetail: Dispatch<SetStateAction<boolean>>;
  hasNext: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  gardens: Garden[];
}

const MapGardens = ({
  showGardenDetail,
  setShowGardenDetail,
  hasNext,
  fetchNextPage,
  hasNextPage,
  gardens,
}: MapGardensProps) => {
  const { setGardenId } = useMapGardenDetailIdStore();
  const { ref } = useInfiniteScroll<HTMLDivElement>({
    fetchData: () => {
      if (hasNext) fetchNextPage();
    },
    hasNextPage,
  });

  return (
    <Box position="relative">
      <Box
        h={{ mobile: '475px', tablet: 'calc(100vh - 166px)' }}
        overflow={showGardenDetail ? 'hidden' : 'auto'}
      >
        {gardens?.map((garden) => (
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
                src={
                  garden.images[0] === null ? MapGardenNoImg : garden.images[0]
                }
                alt={garden.gardenName}
              />

              <Box w={{ mobile: '50%', tablet: '42.5%' }}>
                <GardenStatus
                  type="normal"
                  gardenStatus={garden.gardenStatus}
                />
                <Flex flexDir="column" gap={{ mobile: '0px', tablet: '6px' }}>
                  <Text fontWeight="medium" fontSize="18px" isTruncated>
                    {garden.gardenName}
                  </Text>
                  <Text fontWeight="regular" fontSize="16px" color="gray.700">
                    {garden.size}평
                  </Text>
                  <Text fontWeight="semibold" fontSize="16px">
                    평당 {Number(garden.price).toLocaleString()}원
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
        ))}
        {showGardenDetail && (
          <MapGardenDetail setShowGardenDetail={setShowGardenDetail} />
        )}
        {hasNext && <Box ref={ref} h="10px" />}
      </Box>
    </Box>
  );
};

export default MapGardens;
