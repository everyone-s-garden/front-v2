import { Box, Icon, Image } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import Slider from 'react-slick';
import {
  MapGardenDetailLeftIcon,
  MapSliderLeftIcon,
  MapSliderRightIcon,
} from '@/assets/icons';

interface MapGardenDetailProps {
  setShowGardenDetail: Dispatch<SetStateAction<boolean>>;
}

const MapGardenDetail = ({ setShowGardenDetail }: MapGardenDetailProps) => {
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
    <Box position="absolute" top="0" w="100%" h="100%" bgColor="white">
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
      <Box position="relative">
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
        </Slider>
      </Box>
    </Box>
  );
};

export default MapGardenDetail;
