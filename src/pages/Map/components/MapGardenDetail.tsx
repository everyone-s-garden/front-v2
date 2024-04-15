import {
  Box,
  Button,
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
  HeartIcon,
  MapGardenDetailLeftIcon,
  MapSliderLeftIcon,
  MapSliderRightIcon,
  ReportIcon,
} from '@/assets/icons';
import { MapGardenNoImg } from '@/assets/images';
import GardenStatus from './GardenStatus';
import MapSliderModal from './MapSliderModal';
import MobileMapSlider from './MobileMapSlider';
import { useGetIndividualGarden } from '@/services/gardens/query';
import useMapGardenDetailIdStore from '@/stores/useMapGardenDetailIdStore';

interface MapGardenDetailProps {
  setShowGardenDetail: Dispatch<SetStateAction<boolean>>;
}

const images = [
  {
    id: 1,
    src: MapGardenNoImg,
  },
  {
    id: 2,
    src: MapGardenNoImg,
  },
  {
    id: 3,
    src: MapGardenNoImg,
  },
];

const MapGardenDetail = ({ setShowGardenDetail }: MapGardenDetailProps) => {
  const { gardenId } = useMapGardenDetailIdStore();
  const { data } = useGetIndividualGarden(gardenId);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dragging, setDragging] = useState(false);

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

  console.log(data);

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

        <GardenStatus garden={undefined} type="detail" />

        <Box h="327px" position="relative">
          <Slider {...settings}>
            {images.map((image) => (
              <>
                <Image
                  w="100%"
                  h="327px"
                  cursor="pointer"
                  src={image.src}
                  key={image.id}
                  onClick={handleClickImage}
                />
              </>
            ))}
          </Slider>
        </Box>
      </Box>
      <Box padding="30px">
        <Text fontSize="20px" fontWeight="semibold" marginBottom="30px">
          양주 공공텃밭
        </Text>

        <Flex flexDir="column" gap="21px" marginBottom="40px">
          <Flex>
            <Text minW="25%" fontWeight="medium">
              신청기간
            </Text>
            <Text fontWeight="medium">2023. 04. 20 ~ 04.30</Text>
          </Flex>
          <Flex>
            <Text minW="25%" fontWeight="medium">
              가격
            </Text>
            <Text fontWeight="regular">1구획 당 16000원</Text>
          </Flex>
          <Flex>
            <Text minW="25%" fontWeight="medium">
              면적
            </Text>
            <Text fontWeight="regular">16.5㎡(9평)</Text>
          </Flex>
          <Flex>
            <Text minW="25%" fontWeight="medium">
              연락처
            </Text>
            <Text fontWeight="regular">010-2001-3000</Text>
          </Flex>
        </Flex>

        <Flex flexDir="column" gap="21px">
          <Flex alignItems="center">
            <Text minW="25%" fontWeight="medium">
              부대 시설
            </Text>
            <Flex gap="12px">
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
                거래가능
              </Box>
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
            </Flex>
          </Flex>

          <Flex>
            <Text minW="25%" fontWeight="medium">
              세부 사항
            </Text>
            <Text fontWeight="regular">양주시민들만 참여가 가능합니다.</Text>
          </Flex>
        </Flex>
        <Box marginTop="40px" cursor="pointer">
          <Flex marginBottom="20px" alignItems="center" gap="6px">
            <Icon as={ReportIcon} />
            <Text fontSize="12px" color="gray.400" fontWeight="regular">
              신고하기
            </Text>
          </Flex>

          <Flex w="fit-content" margin="0 auto" gap="14px">
            <Button
              border="1px solid"
              borderColor="gray.100"
              padding="14px"
              bgColor="white"
              _hover={{}}
              _active={{}}
            >
              <Icon
                w="24px"
                h="24px"
                as={HeartIcon}
                fill="gray.300"
                marginRight="6px"
              />
              <Text color="gray.300" fontWeight="medium">
                찜하기
              </Text>
            </Button>
            <Button
              color="white"
              padding="14px 52px"
              bgColor="green.500"
              _hover={{}}
              _active={{}}
            >
              신청하기
            </Button>
          </Flex>
        </Box>
      </Box>
      <Show above="tablet">
        {isOpen && <MapSliderModal isOpen={isOpen} onClose={onClose} />}
      </Show>
      <Show below="tablet">
        {isOpen && <MobileMapSlider isOpen={isOpen} onClose={onClose} />}
      </Show>
    </Box>
  );
};

export default MapGardenDetail;
