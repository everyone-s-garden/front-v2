import { Flex, Hide, Image, Show } from '@chakra-ui/react';
import { Fragment } from 'react';
import { ImageSlider } from '@/components';
import { mainBanner, mainBannerMobile } from '@/assets/images/banners';

const BANNER_INFO = [
  {
    pc: mainBanner,
    mobile: mainBannerMobile,
    bgColor: '#131313',
  },
];

const Banner = () => {
  return (
    <ImageSlider arrowStyle="plain" numberOfSlides={BANNER_INFO.length}>
      {BANNER_INFO.map(({ pc, bgColor }, idx) => (
        <Fragment key={idx}>
          <Flex justifyContent="center" bg={bgColor}>
            <Show above="tablet">
              <Image
                hideFrom="mobile"
                draggable={false}
                src={pc}
                alt="main page banner"
              />
            </Show>
            <Hide above="tablet">
              <Image
                hideBelow={'tablet'}
                draggable={false}
                src={BANNER_INFO[idx].mobile}
                alt="main page banner"
              />
            </Hide>
          </Flex>
        </Fragment>
      ))}
    </ImageSlider>
  );
};

export default Banner;
