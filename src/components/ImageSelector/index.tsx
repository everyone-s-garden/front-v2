import {
  Box,
  Button,
  Container,
  FormLabel,
  Icon,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useEffect, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import Arrow from './Arrow';
import { CameraIcon, CloseIcon } from '@/assets/icons';

interface ImageSelectorProps {
  color: 'green' | 'orange';
  h?: {
    mobile?: number;
    tablet?: number;
  };
  gap?: number;
  slides?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
}

const ImageSelector = ({
  color,
  h = { mobile: 110, tablet: 136 },
  gap = 10,
  slides = { mobile: 2.2, tablet: 4, desktop: 6 },
}: ImageSelectorProps) => {
  const [images, setImages] = useState<{ file: File; url: string }[]>([]);
  const sliderRef = useRef<Slider>(null);

  const settings: Settings = {
    dots: false,
    infinite: false,
    slidesToShow: slides.desktop,
    slidesToScroll: 1,
    prevArrow: <Arrow dir="left" color={color} />,
    nextArrow: <Arrow dir="right" color={color} />,
    swipeToSlide: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slides.tablet,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: slides.mobile,
        },
      },
    ],
  };

  const resetTrack = () => {
    setTimeout(() => {
      document
        .querySelector('.slick-track')
        ?.setAttribute('style', 'transform: translate3d(0px, 0px, 0px);');
    }, 100);
  };

  useEffect(() => {
    if (images.length === 0) {
      resetTrack();
    }
  }, [images.length]);

  const handleFileChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (!target.files) return;
    if (images.length + target.files.length > 10)
      return alert('이미지는 최대 10개까지 등록 가능합니다.');

    const files = Array.from(target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [
      ...prev,
      ...files.map((file, i) => ({ file, url: urls[i] })),
    ]);
  };

  const handleDeleteImage = (url: string) => {
    setImages((prev) => prev.filter((image) => image.url !== url));
  };

  return (
    <Container display="flex" alignItems="center">
      <Button
        as={FormLabel}
        bg={`${color}.100`}
        borderRadius={10}
        w={h}
        h={h}
        htmlFor="image"
        cursor="pointer"
        display="flex"
        flexDir="column"
        flexShrink={0}
        mr={gap}
      >
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id="image"
        />
        <Icon as={CameraIcon} fill={`${color}.500`} w={24} h={24} />
        <Text fontWeight="medium" color={`${color}.500`}>
          {images.length}/10
        </Text>
      </Button>
      <Container
        className="slick-container"
        css={{
          '.slick-track': {
            display: 'flex',
            gap,
            alignItems: 'center',
            paddingRight: '5px',
          },
          '.slick-slider': {
            position: 'relative',
          },
          '.slick-slide > div': {
            display: 'flex',
          },
          '.slick-prev': {
            position: 'absolute',
            zIndex: 1,
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
          },
          '.slick-next': {
            position: 'absolute',
            zIndex: 1,
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
          },
          '.slick-disabled': {
            display: 'none',
          },
        }}
        w="100%"
        overflow="hidden"
      >
        <Slider ref={sliderRef} {...settings}>
          {images.map(({ url }) => (
            <Box pos="relative" key={nanoid()}>
              <IconButton
                borderRadius="50%"
                bg="white"
                border="1px solid"
                borderColor="gray.400"
                icon={<CloseIcon />}
                aria-label="close button"
                w={24}
                h={24}
                p={4}
                fill="gray.400"
                pos="absolute"
                top={8}
                right={8}
                onClick={() => handleDeleteImage(url)}
              />
              <Image
                src={url}
                h={h}
                w="100%"
                borderRadius={10}
                bg={`${color}.100`}
              />
            </Box>
          ))}
        </Slider>
      </Container>
    </Container>
  );
};

export default ImageSelector;
