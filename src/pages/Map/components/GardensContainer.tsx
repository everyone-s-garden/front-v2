import { Box, Icon, Show, chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { MapArrowBottomIcon, MapArrowLeftIcon } from '@/assets/icons';
import getMapBounds from '../utils/getMapBounds';
import MapGardens from './MapGardens';
import MapNoGarden from './MapNoGarden';
import { useGetGardensScroll } from '@/services/gardens/query';

const Button = chakra(motion.button);
const GardenContainer = chakra(motion.div);

interface GardensContainerProps {
  showGardens: boolean;
  setShowGardens: Dispatch<SetStateAction<boolean>>;
  showGardenDetail: boolean;
  setShowGardenDetail: Dispatch<SetStateAction<boolean>>;
  gardenType: 'ALL' | 'PUBLIC' | 'PRIVATE';
  map: naver.maps.Map | null;
}

const GardensContainer = ({
  showGardens,
  setShowGardens,
  showGardenDetail,
  setShowGardenDetail,
  gardenType,
  map,
}: GardensContainerProps) => {
  const [hasNext, setHasNext] = useState(false);
  const { startLat, startLong, endLat, endLong } = getMapBounds(map);
  const { data, fetchNextPage, hasNextPage } = useGetGardensScroll(
    map,
    gardenType,
    startLat,
    startLong,
    endLat,
    endLong,
  );

  const gardens = data?.allGardens;

  useEffect(() => {
    setHasNext(data?.pages[data.pageParams.length - 1].hasNext);
  }, [data?.pageParams.length, data?.pages]);

  return (
    <>
      <Show above="tablet">
        <GardenContainer
          w="378px"
          position="absolute"
          zIndex="3"
          h="100%"
          right="0"
          bgColor="white"
          borderWidth="1px 0 0 1px"
          borderColor="gray.200"
          initial={{
            x: showGardens ? 0 : 379,
          }}
          animate={{
            x: showGardens ? 0 : 379,
            transition: { type: 'tween' },
          }}
        >
          {gardens?.length === 0 ? (
            <MapNoGarden />
          ) : (
            <MapGardens
              {...{
                showGardenDetail,
                setShowGardenDetail,
                setShowGardens,
                fetchNextPage,
                hasNextPage,
                hasNext,
                gardens,
              }}
            />
          )}
          <Button
            position="absolute"
            left="-22px"
            top="50%"
            transform="translateY(-50%)"
            bgColor="white"
            cursor="pointer"
            minW="21px"
            h="55px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              borderRadius: '5px 0 0 5px',
              borderWidth: '1px 0 1px 1px',
              borderColor: 'gray.200',
              borderStyle: 'solid',
            }}
            onClick={() => setShowGardens(!showGardens)}
          >
            {showGardens ? (
              <Icon as={MapArrowLeftIcon} transform="rotate(180deg)" />
            ) : (
              <Icon as={MapArrowLeftIcon} />
            )}
          </Button>
        </GardenContainer>
      </Show>

      <Show below="tablet">
        <Box left="50%">
          <GardenContainer
            w="100%"
            zIndex={99}
            position="fixed"
            bottom="0"
            h="475px"
            bgColor="white"
            borderTop="1px"
            borderColor="gray.200"
            borderRadius="17px 17px 0 0"
            initial={{ y: showGardens ? 0 : 455 }}
            animate={{
              y: showGardens ? 0 : 455,
              transition: { type: 'tween' },
            }}
          >
            {gardens?.length === 0 ? (
              <MapNoGarden />
            ) : (
              <MapGardens
                {...{
                  showGardenDetail,
                  setShowGardenDetail,
                  setShowGardens,
                  fetchNextPage,
                  hasNextPage,
                  hasNext,
                  gardens,
                }}
              />
            )}
            <Button
              position="absolute"
              display="flex"
              justifyContent="center"
              alignItems="center"
              w="55px"
              h="21px"
              left="50%"
              transform="translateX(-50%)"
              top="-22px"
              bgColor="white"
              sx={{
                borderRadius: '5px 5px 0 0',
                borderWidth: '1px 1px 0 1px',
                borderColor: 'gray.200',
                borderStyle: 'solid',
              }}
              cursor="pointer"
              onClick={() => setShowGardens(!showGardens)}
            >
              {showGardens ? (
                <Icon as={MapArrowBottomIcon} />
              ) : (
                <Icon as={MapArrowBottomIcon} transform="rotate(180deg)" />
              )}
            </Button>
          </GardenContainer>
        </Box>
      </Show>
    </>
  );
};

export default GardensContainer;
