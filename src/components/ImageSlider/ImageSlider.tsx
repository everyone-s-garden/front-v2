import { Box, ImageProps } from '@chakra-ui/react';
import { PropsWithChildren, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from './Arrow';

export interface ImageSliderProps {
  arrowStyle: 'plain' | 'circle';
  numberOfSlides: number;
  imageMaxWidth?: ImageProps['maxWidth'];
}

const ImageSlider = ({
  children,
  numberOfSlides,
  arrowStyle,
  imageMaxWidth = '1440px',
}: PropsWithChildren<ImageSliderProps>) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings: Settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (newIndex: number) => setCurrentSlide(newIndex),
    nextArrow: (
      <Arrow
        currentSlide={currentSlide}
        numberOfSlides={numberOfSlides}
        arrowStyle={arrowStyle}
        dir="next"
      />
    ),
    prevArrow: (
      <Arrow
        currentSlide={currentSlide}
        numberOfSlides={numberOfSlides}
        arrowStyle={arrowStyle}
        dir="prev"
      />
    ),
  };

  return (
    <Box
      __css={{
        '.slick-slide img': {
          tablet: {
            maxWidth: imageMaxWidth,
            width: '100%',
          },
        },
      }}
    >
      <Slider {...settings}>{children}</Slider>
    </Box>
  );
};

export default ImageSlider;
