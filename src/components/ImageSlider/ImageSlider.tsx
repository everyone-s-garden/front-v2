import { PropsWithChildren, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Arrow from './Arrow';

export interface ImageSliderProps {
  // >,< 화살표 모양을 정해서 내려주시면 됩니다. plain은 메인페이지에서만 사용 되는 화살표이고, 'circle'은 동그란 화살표입니다.
  arrowStyle: 'plain' | 'circle';

  // 이미지 슬라이드의 총 개수를 넘겨주시면 됩니다.
  numberOfSlides: number;
}

const ImageSlider = ({
  children,
  numberOfSlides,
  arrowStyle,
}: PropsWithChildren<ImageSliderProps>) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
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

  return <Slider {...settings}>{children}</Slider>;
};

export default ImageSlider;
