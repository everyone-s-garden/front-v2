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
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CameraIcon, ClosePrimaryIcon } from '@/assets/icons';
import 'swiper/css';
import 'swiper/css/navigation';
import { ALERT_MESSAGE, MAX_IMAGE_LENGTH } from './constants';
import { useImageStore } from '@/stores/imageStore';

interface ImageSelectorProps {
  breakPoints: Record<number, { slidesPerView: number; spaceBetween?: number }>;
  color: 'green' | 'orange';
  size: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  showArrow?: boolean;
}

const ImageSelector = ({
  breakPoints,
  color = 'green',
  size,
  showArrow = true,
}: ImageSelectorProps) => {
  const images = useImageStore((state) => state.images);
  const setImages = useImageStore((state) => state.setImages);

  const handleImageAdd = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (!target.files) return;

    if (images.length + target.files.length > MAX_IMAGE_LENGTH)
      return alert(ALERT_MESSAGE.MAX_IMAGE);

    const files = Array.from(target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setImages([
      ...images,
      ...files.map((file, index) => ({ file, url: urls[index] })),
    ]);
  };

  const handleImageRemove = (urlToRemove: string) => {
    const updatedImages = images.filter(({ url }) => url !== urlToRemove);
    setImages(updatedImages);
  };

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
          color: `${color}.500`,
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
        bg={`${color}.100`}
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
        _hover={{ bg: `${color}.100` }}
        _active={{ bg: `${color}.100` }}
      >
        <input
          id="image-upload"
          multiple
          type="file"
          accept="image/jpg,image/png,image/jpeg,image/gif"
          onChange={handleImageAdd}
          style={{ display: 'none' }}
        />
        <Icon as={CameraIcon} fill={`${color}.500`} w={'24px'} h={'24px'} />
        <Text fontWeight="medium" color={`${color}.500`}>
          {images.length}/10
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
                onClick={() => handleImageRemove(image.url)}
              />
              <Image
                src={image.url}
                alt={`image-${image.url}`}
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
