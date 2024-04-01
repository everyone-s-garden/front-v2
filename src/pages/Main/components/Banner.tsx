import { Flex, Hide, Image, Show } from '@chakra-ui/react';
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
            <Show above="tablet">
              <Image
                hideFrom="mobile"
                draggable={false}
                src={pc}
                alt="main page banner"
                key={idx}
              />
            </Show>
            <Hide above="tablet">
              <Image
                hideBelow={'tablet'}
                draggable={false}
                src={BANNER_INFO[idx].mobile}
                alt="main page banner"
                key={idx}
              />
            </Hide>
          </Flex>
        </>
      ))}
    </ImageSlider>
  );
};

export default Banner;
