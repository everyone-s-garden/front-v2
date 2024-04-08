import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
import GardenStatus from './GardenStatus';
import MapGardenDetail from './MapGardenDetail';
import useMapGardenDetailIdStore from '@/stores/useMapGardenDetailIdStore';

interface MapGardens {
  gardens: Garden[];
}

const MapGardens = ({ gardens }: MapGardens) => {
  const [showGardenDetail, setShowGardenDetail] = useState(false);
  const { setGardenId } = useMapGardenDetailIdStore();

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
                minW={{ mobile: '148px', tablet: '176px' }}
                h={{ mobile: '115px', tablet: '138px' }}
                borderRadius="8px"
                cursor="pointer"
                onClick={() => {
                  setGardenId(garden.gardenId);
                  setShowGardenDetail(true);
                }}
                src={
                  // 예시 이미지
                  'https://s3-alpha-sig.figma.com/img/260d/cf56/ae3a3e0756812f18eecb200f5aa341a3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FTEevLd1T3lQmJjKqDh-MM4hY0E6GX1gWMgPFfVkUrYrYYgx0Id0zPioeQvrPp1Rkc~rOcZROBqGf0ElPJZnBFlURZ~okNw2XwgNTbFEF4f9JvDRGMpNSAcRrxbvRLSIYr9B~~SjOZDRKY5f5QMbbUvjgHxPpdSG~ctYqbet2qDhHeOFemrdicvTbDF5QimDqEZjpwBVmajBn6aIaz24YMte1mbGv~xoHheAZrne97oqvaUlIrnLlPL2df0j0dzbZCkr-3mJQczScxJwa~IN0iznuXuFDGqRa6vbTPaNbPmOLidJahLJIOkkE5J-ehNySgwMszDz2SWlVp0vZNAnPg__'
                }
                alt={garden.gardenName}
              />

              <Box w={{ mobile: '50%', tablet: '42.5%' }}>
                <GardenStatus type="normal" garden={garden} />
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
            {showGardenDetail && (
              <MapGardenDetail setShowGardenDetail={setShowGardenDetail} />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MapGardens;
