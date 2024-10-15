import { Flex, Image, useMediaQuery } from '@chakra-ui/react';
import { mainBanner, mainBannerMobile } from '@/assets/images/banners';
import { devices } from '@/styles/theme';

const BANNER_INFO = [
  {
    pc: mainBanner,
    mobile: mainBannerMobile,
    bgColor: '#131313',
  },
];

const Banner = () => {
  const [isLargerThanTablet] = useMediaQuery(devices.tablet);

  return (
    <Flex bg={BANNER_INFO[0].bgColor} justifyContent="center">
      <Image
        draggable={false}
        maxW={{ mobile: '500px', tablet: '1440px' }}
        w="100%"
        src={isLargerThanTablet ? mainBanner : mainBannerMobile}
      />
    </Flex>
  );
};

export default Banner;
