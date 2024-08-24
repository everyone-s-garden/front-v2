import { Box, Flex, Icon, Show, Spinner, Text } from '@chakra-ui/react';
import { MapGardenDetailLeftIcon } from '@/assets/icons';
import BottomSection from './BottomSection';
import GardenDescription from './GardenDescription';
import GardenImages from './GardenImages';
import { useGetIndividualGarden } from '@/services/gardens/query';
import useMapGardenDetailIdStore from '@/stores/useMapGardenDetailIdStore';
import useShowGardenDetailStore from '@/stores/useShowGardenDetailStore';

const GardenDetail = () => {
  const { gardenId } = useMapGardenDetailIdStore();
  const { data: gardenInfo, refetch } = useGetIndividualGarden(gardenId);
  const { setShowGardenDetail } = useShowGardenDetailStore();

  if (!gardenInfo)
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        pos="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        bgColor="rgba(0,0,0,0.2)"
        zIndex="9999"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="green.500"
          size="xl"
        />
      </Flex>
    );

  return (
    <Flex
      direction="column"
      position={{ mobile: 'fixed', tablet: 'absolute' }}
      top="0"
      left="0"
      w="100%"
      h="100%"
      bgColor="white"
      overflowY="auto"
      zIndex="3"
      justifyContent="space-between"
    >
      <Box>
        <Show below="tablet">
          <Box position="relative" bgColor="white" h="60px">
            <Icon
              position="absolute"
              left="20px"
              top="50%"
              transform="translateY(-50%)"
              fill="none"
              stroke="black"
              padding="0"
              cursor="pointer"
              w="20px"
              h="20px"
              onClick={() => setShowGardenDetail(false)}
              as={MapGardenDetailLeftIcon}
            />
            <Text
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              fontSize="18px"
              fontWeight="semibold"
            >
              텃밭 상세보기
            </Text>
          </Box>
        </Show>
        <Box position="relative">
          <Show above="tablet">
            <Icon
              position="absolute"
              left="21px"
              top="34.41px"
              fill="none"
              minW="auto"
              minH="auto"
              stroke="white"
              padding="0"
              cursor="pointer"
              zIndex="1"
              onClick={() => setShowGardenDetail(false)}
              as={MapGardenDetailLeftIcon}
            />
          </Show>
          <GardenImages gardenInfo={gardenInfo} />
        </Box>
        <GardenDescription gardenInfo={gardenInfo} />
      </Box>
      <BottomSection gardenInfo={gardenInfo} refetch={refetch} />
    </Flex>
  );
};

export default GardenDetail;
