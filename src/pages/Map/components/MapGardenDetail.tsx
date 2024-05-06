import {
  Box,
  Flex,
  Icon,
  Image,
  Show,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Dispatch, SetStateAction, useState } from 'react';
import Slider from 'react-slick';
import {
  MapGardenDetailLeftIcon,
  MapSliderLeftIcon,
  MapSliderRightIcon,
} from '@/assets/icons';
import { MapGardenNoImg } from '@/assets/images';
import GardenStatus from './GardenStatus';
import MapGardenDetailBottomSection from './MapGardenDetailBottomSection';
import MapSliderModal from './MapSliderModal';
import MobileMapSlider from './MobileMapSlider';
import { useGetIndividualGarden } from '@/services/gardens/query';
import useMapGardenDetailIdStore from '@/stores/useMapGardenDetailIdStore';

interface MapGardenDetailProps {
  setShowGardenDetail: Dispatch<SetStateAction<boolean>>;
}

const MapGardenDetail = ({ setShowGardenDetail }: MapGardenDetailProps) => {
  const { gardenId } = useMapGardenDetailIdStore();
  const { data } = useGetIndividualGarden(gardenId);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dragging, setDragging] = useState(false);
  const garden: GardenDetail = data;

  const handleBeforeChange = () => {
    setDragging(true);
  };

  const handleAfterChange = () => {
    setDragging(false);
  };

  const handleClickImage = () => {
    if (!dragging) {
      onOpen();
    }
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,

    nextArrow: (
      <Box
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        right="15px"
        zIndex="1"
      >
        <Icon fill="rgba(255, 255, 255, 0.70);" as={MapSliderRightIcon} />
      </Box>
    ),
    prevArrow: (
      <Box
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        left="15px"
        zIndex="1"
      >
        <Icon fill="rgba(255, 255, 255, 0.70);" as={MapSliderLeftIcon} />
      </Box>
    ),
  };

  const hasNoFacility =
    !garden?.gardenFacility.isEquipment &&
    !garden?.gardenFacility.isToilet &&
    !garden?.gardenFacility.isWaterway;

  return (
    <Box
      position={{ mobile: 'fixed', tablet: 'absolute' }}
      top="0"
      left="0"
      w="100%"
      h="100%"
      bgColor="white"
      overflowY="auto"
      zIndex="3"
    >
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

        <GardenStatus gardenStatus={garden?.gardenStatus} type="detail" />

        <Box h="327px" position="relative">
          <Slider {...settings}>
            {garden?.images.map((image, i) => {
              let src;
              if (!image) src = MapGardenNoImg;
              else src = image;

              return (
                <Image
                  w="100%"
                  h="327px"
                  cursor="pointer"
                  src={src}
                  key={i}
                  onClick={handleClickImage}
                />
              );
            })}
          </Slider>
        </Box>
      </Box>
      <Box padding="30px">
        <Text fontSize="20px" fontWeight="semibold" marginBottom="30px">
          {garden?.gardenName}
        </Text>

        <Flex flexDir="column" gap="21px" marginBottom="40px">
          <Flex>
            <Text minW="25%" fontWeight="medium">
              신청기간
            </Text>
            <Text fontWeight="medium">
              {garden?.recruitEndDate} ~ {garden?.recruitStartDate}
            </Text>
          </Flex>
          <Flex>
            <Text minW="25%" fontWeight="medium">
              가격
            </Text>
            <Text fontWeight="regular">
              평 당 {Number(garden?.price).toLocaleString()}원
            </Text>
          </Flex>
          <Flex>
            <Text minW="25%" fontWeight="medium">
              면적
            </Text>
            <Text fontWeight="regular">{garden?.size}평</Text>
          </Flex>
          <Flex>
            <Text minW="25%" fontWeight="medium">
              연락처
            </Text>
            <Text fontWeight="regular">{garden?.contact}</Text>
          </Flex>
        </Flex>

        <Flex flexDir="column" gap="21px">
          {!hasNoFacility && (
            <>
              <Flex alignItems="center">
                <Text minW="25%" fontWeight="medium">
                  부대 시설
                </Text>
                <Flex gap="12px">
                  {garden?.gardenFacility.isToilet && (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bgColor="green.100"
                      border="1px solid"
                      borderColor="green.500"
                      fontWeight="medium"
                      borderRadius="10px"
                      height="32px"
                      padding="0 5px"
                    >
                      화장실
                    </Box>
                  )}

                  {garden?.gardenFacility.isEquipment && (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bgColor="green.100"
                      border="1px solid"
                      borderColor="green.500"
                      fontWeight="medium"
                      borderRadius="10px"
                      height="32px"
                      padding="0 5px"
                    >
                      농기구
                    </Box>
                  )}

                  {garden?.gardenFacility.isWaterway && (
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      bgColor="green.100"
                      border="1px solid"
                      borderColor="green.500"
                      fontWeight="medium"
                      borderRadius="10px"
                      height="32px"
                      padding="0 5px"
                    >
                      수로
                    </Box>
                  )}
                </Flex>
              </Flex>
            </>
          )}

          <Flex>
            <Text minW="25%" fontWeight="medium">
              세부 사항
            </Text>
            <Text fontWeight="regular">{garden?.gardenDescription}</Text>
          </Flex>
        </Flex>
        <MapGardenDetailBottomSection garden={garden} />
      </Box>

      <Show above="tablet">
        {isOpen && (
          <MapSliderModal
            images={garden?.images}
            isOpen={isOpen}
            onClose={onClose}
          />
        )}
      </Show>
      <Show below="tablet">
        {isOpen && (
          <MobileMapSlider
            images={garden?.images}
            isOpen={isOpen}
            onClose={onClose}
          />
        )}
      </Show>
    </Box>
  );
};

export default MapGardenDetail;
