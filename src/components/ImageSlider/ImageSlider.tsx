import { PropsWithChildren, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

export interface ArrowProps {
  onClick?: () => void;
  currentSlide?: number;
  numberOfSlides?: number;
  isMainPage: boolean;
}

export interface ImageSliderProps {
  // 메인페이지에서만 >,<의 디자인디 다르기 때문에 props로 isMainPage로 true, false값을 내려주시면 됩니다.
  isMainPage: boolean;

  // 이미지 슬라이드의 총 개수를 넘겨주시면 됩니다.
  numberOfSlides: number;
}

const ImageSlider = ({
  children,
  numberOfSlides,
  isMainPage,
}: PropsWithChildren<ImageSliderProps>) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (newIndex: number) => setCurrentSlide(newIndex),
    nextArrow: (
      <NextArrow
        currentSlide={currentSlide}
        numberOfSlides={numberOfSlides}
        isMainPage={isMainPage}
      />
    ),
    prevArrow: (
      <PrevArrow
        currentSlide={currentSlide}
        numberOfSlides={numberOfSlides}
        isMainPage={isMainPage}
      />
    ),
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default ImageSlider;
