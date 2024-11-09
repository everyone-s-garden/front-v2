import {
  Box,
  Button,
  FormLabel,
  Icon,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CameraIcon, ClosePrimaryIcon } from '@/assets/icons';
import 'swiper/css';
import 'swiper/css/navigation';
import { ALERT_MESSAGE, MAX_IMAGE_LENGTH } from './constants';
import { useImageStore } from '@/stores/imageStore';

interface ImageSelectorProps {
  breakPoints: Record<number, { slidesPerView: number; spaceBetween?: number }>;
  size: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  showArrow?: boolean;
  maxImageLength?: number;
  initialImages?: string[];
}
const imageTypeCheck = (
  image: string | { file: File; url: string },
): image is { file: File; url: string } => {
  return typeof image !== 'string';
};

const ImageSelector = ({
  breakPoints,
  size,
  showArrow = true,
  maxImageLength = MAX_IMAGE_LENGTH,
  initialImages,
}: ImageSelectorProps) => {
  const images = useImageStore((state) => state.images);
  const setImages = useImageStore((state) => state.setImages);
  const maxLen = maxImageLength;

  const handleImageAdd = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (!target.files) return;

    if (images.length + target.files.length > maxLen)
      return alert(ALERT_MESSAGE.MAX_IMAGE(maxLen));

    const files = Array.from(target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    const newImages = files.map((file, index) => ({ file, url: urls[index] }));
    if (images.every((image) => typeof image !== 'string')) {
      setImages([...images, ...newImages] as { file: File; url: string }[]);
    }
  };

  const handleImageRemove = (urlToRemove: string) => {
    const updatedImages = images.filter(
      (image): image is string | { file: File; url: string } =>
        imageTypeCheck(image)
          ? image.url !== urlToRemove
          : image !== urlToRemove,
    );

    // 타입 검사 후 setImages에 전달
    if (updatedImages.every((image) => typeof image === 'string')) {
      setImages(updatedImages as string[]);
    } else if (updatedImages.every((image) => imageTypeCheck(image))) {
      setImages(updatedImages as { file: File; url: string }[]);
    }
  };

  useEffect(() => {
    if (initialImages) {
      setImages(initialImages);
    }
  }, [initialImages]);

  return (
    <Box
      display={'flex'}
      flexShrink={0}
      __css={{
        '.swiper-button-prev, .swiper-button-next': {
          w: '40px',
          h: '40px',
          borderRadius: '50%',
          bg: 'white',
          color: 'gray.300',
          border: '1px solid',
          borderColor: 'gray.300',
          display: { mobile: 'none', tablet: 'flex' },
        },
        '.swiper-button-prev::after, .swiper-button-next::after': {
          fontSize: '20px',
          color: `green.500`,
        },
        '.swiper-button-prev': {
          top: '50%',
        },
        '.swiper-button-next': {
          top: '50%',
        },
        '.swiper-button-disabled': {
          display: 'none',
        },
        '.swiper': {
          width: '100%',
          height: '100%',
        },
        '.swiper-slide': {
          width: size,
          height: size,
        },
      }}
    >
      <Button
        as={FormLabel}
        bg={`gray.50`}
        borderRadius={10}
        w={size}
        h={size}
        htmlFor="image-upload"
        cursor="pointer"
        display="flex"
        flexDir="column"
        flexShrink={0}
        mr={'10px'}
        mb={0}
        _hover={{ bg: `gray.100` }}
        _active={{ bg: `gray.100` }}
      >
        <input
          id="image-upload"
          multiple
          type="file"
          accept="image/jpg,image/png,image/jpeg,image/gif"
          onChange={handleImageAdd}
          style={{ display: 'none' }}
        />
        <Icon as={CameraIcon} fill={`gray.500`} w={'24px'} h={'24px'} />
        <Text fontWeight="medium" color={`gray.500`}>
          {images.length}/{maxImageLength}
        </Text>
      </Button>
      <Swiper
        breakpoints={breakPoints}
        navigation={showArrow}
        modules={[Navigation]}
      >
        {images.map((image) => (
          <SwiperSlide key={nanoid()}>
            <Box pos="relative" w={'100%'} h={'100%'}>
              <IconButton
                borderRadius="50%"
                bg="white"
                border="1px solid"
                borderColor="gray.400"
                icon={<ClosePrimaryIcon />}
                aria-label="close button"
                w={'24px'}
                h={'24px'}
                p={'4px'}
                minW={'auto'}
                m={0}
                fill="gray.400"
                pos="absolute"
                top={'8px'}
                right={'8px'}
                _hover={{ bg: 'white' }}
                _active={{ bg: 'white' }}
                onClick={() =>
                  handleImageRemove(imageTypeCheck(image) ? image.url : image)
                }
              />
              <Image
                src={imageTypeCheck(image) ? image.url : image}
                alt={`image-${imageTypeCheck(image) ? image.url : image}`}
                w={'100%'}
                h={'100%'}
                borderRadius={10}
                bg={`white`}
                userSelect={'none'}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ImageSelector;
