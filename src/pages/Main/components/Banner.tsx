import { Box, Flex, Image } from '@chakra-ui/react';
import { ImageSlider } from '@/components';
import {
  Banner1,
  Banner1Mobile,
  Banner2,
  Banner2Mobile,
} from '@/assets/images';

const BANNER_INFO = [
  {
    pc: Banner1,
    mobile: Banner1Mobile,
    bgColor: '#FEF9E6',
  },
  {
    pc: Banner2,
    mobile: Banner2Mobile,
    bgColor: '#F0FBE4',
  },
];

const Banner = () => {
  return (
    <ImageSlider arrowStyle="plain" numberOfSlides={BANNER_INFO.length}>
      {BANNER_INFO.map(({ pc, bgColor }, idx) => (
        <>
          <Flex justifyContent="center" bg={bgColor}>
            <Image
              draggable={false}
              maxW="1440px"
              src={pc}
              alt="main page banner"
              key={idx}
            />
          </Flex>
        </>
      ))}
    </ImageSlider>
  );
};

export default Banner;
