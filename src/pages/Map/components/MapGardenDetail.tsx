import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import Slider from 'react-slick';
import {
  HeartIcon,
  MapGardenDetailLeftIcon,
  MapSliderLeftIcon,
  MapSliderRightIcon,
  ReportIcon,
} from '@/assets/icons';
import GardenStatus from './GardenStatus';
import { useGetIndividualGarden } from '@/services/gardens/query';
import useMapGardenDetailIdStore from '@/stores/useMapGardenDetailIdStore';

interface MapGardenDetailProps {
  setShowGardenDetail: Dispatch<SetStateAction<boolean>>;
}

const MapGardenDetail = ({ setShowGardenDetail }: MapGardenDetailProps) => {
  const { gardenId } = useMapGardenDetailIdStore();
  const { data } = useGetIndividualGarden(gardenId);

  console.log(data);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      position="absolute"
      top="0"
      left="0"
      w="100%"
      h="100%"
      bgColor="white"
      overflowY="auto"
      zIndex="1"
    >
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

      <GardenStatus garden={undefined} type="detail" />

      <Box h="327px" position="relative">
        <Slider {...settings}>
          <Image
            w="100%"
            h="327px"
            src="https://s3-alpha-sig.figma.com/img/260d/cf56/ae3a3e0756812f18eecb200f5aa341a3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FTEevLd1T3lQmJjKqDh-MM4hY0E6GX1gWMgPFfVkUrYrYYgx0Id0zPioeQvrPp1Rkc~rOcZROBqGf0ElPJZnBFlURZ~okNw2XwgNTbFEF4f9JvDRGMpNSAcRrxbvRLSIYr9B~~SjOZDRKY5f5QMbbUvjgHxPpdSG~ctYqbet2qDhHeOFemrdicvTbDF5QimDqEZjpwBVmajBn6aIaz24YMte1mbGv~xoHheAZrne97oqvaUlIrnLlPL2df0j0dzbZCkr-3mJQczScxJwa~IN0iznuXuFDGqRa6vbTPaNbPmOLidJahLJIOkkE5J-ehNySgwMszDz2SWlVp0vZNAnPg__"
          />
          <Image
            w="100%"
            h="327px"
            src="https://s3-alpha-sig.figma.com/img/260d/cf56/ae3a3e0756812f18eecb200f5aa341a3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FTEevLd1T3lQmJjKqDh-MM4hY0E6GX1gWMgPFfVkUrYrYYgx0Id0zPioeQvrPp1Rkc~rOcZROBqGf0ElPJZnBFlURZ~okNw2XwgNTbFEF4f9JvDRGMpNSAcRrxbvRLSIYr9B~~SjOZDRKY5f5QMbbUvjgHxPpdSG~ctYqbet2qDhHeOFemrdicvTbDF5QimDqEZjpwBVmajBn6aIaz24YMte1mbGv~xoHheAZrne97oqvaUlIrnLlPL2df0j0dzbZCkr-3mJQczScxJwa~IN0iznuXuFDGqRa6vbTPaNbPmOLidJahLJIOkkE5J-ehNySgwMszDz2SWlVp0vZNAnPg__"
          />
          <Image
            w="100%"
            h="327px"
            src="https://s3-alpha-sig.figma.com/img/260d/cf56/ae3a3e0756812f18eecb200f5aa341a3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FTEevLd1T3lQmJjKqDh-MM4hY0E6GX1gWMgPFfVkUrYrYYgx0Id0zPioeQvrPp1Rkc~rOcZROBqGf0ElPJZnBFlURZ~okNw2XwgNTbFEF4f9JvDRGMpNSAcRrxbvRLSIYr9B~~SjOZDRKY5f5QMbbUvjgHxPpdSG~ctYqbet2qDhHeOFemrdicvTbDF5QimDqEZjpwBVmajBn6aIaz24YMte1mbGv~xoHheAZrne97oqvaUlIrnLlPL2df0j0dzbZCkr-3mJQczScxJwa~IN0iznuXuFDGqRa6vbTPaNbPmOLidJahLJIOkkE5J-ehNySgwMszDz2SWlVp0vZNAnPg__"
          />
        </Slider>
      </Box>
      <Box padding="30px">
        <Text fontSize="20px" fontWeight="semibold" marginBottom="30px">
          양주 공공텃밭
        </Text>

        <Flex flexDir="column" gap="21px" marginBottom="40px">
          <Flex>
            <Text w="25%" fontWeight="medium">
              신청기간
            </Text>
            <Text fontWeight="medium">2023. 04. 20 ~ 04.30</Text>
          </Flex>
          <Flex>
            <Text w="25%" fontWeight="medium">
              가격
            </Text>
            <Text fontWeight="regular">1구획 당 16000원</Text>
          </Flex>
          <Flex>
            <Text w="25%" fontWeight="medium">
              면적
            </Text>
            <Text fontWeight="regular">16.5㎡(9평)</Text>
          </Flex>
        </Flex>

        <Flex flexDir="column" gap="21px">
          <Flex alignItems="center">
            <Text w="25%" fontWeight="medium">
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
            <Text w="25%" fontWeight="medium">
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
    </Box>
  );
};

export default MapGardenDetail;
