import {
  Box,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import { CloseIcon } from '@/assets/icons';
import { MapGardenNoImg } from '@/assets/images';

const images = [
  {
    id: 1,
    src: MapGardenNoImg,
  },
  {
    id: 2,
    src: MapGardenNoImg,
  },
  {
    id: 3,
    src: MapGardenNoImg,
  },
];

interface MapSliderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMapSlider = ({ isOpen, onClose }: MapSliderModalProps) => {
  const settings = {
    dots: images.length > 1,
    arrows: images.length > 1,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: JSX.Element) => (
      <Box position="fixed" bottom="30px">
        {dots}
      </Box>
    ),
  };

  return (
    <Modal isOpen={isOpen} onClose={() => {}} isCentered>
      <ModalOverlay bgColor="#000" />
      <ModalContent maxWidth="fit-content" h="287px">
        <Icon
          onClick={onClose}
          as={CloseIcon}
          w="28px"
          h="28px"
          fill="white"
          position="fixed"
          top="22px"
          right="22px"
          cursor="pointer"
        />
        <ModalBody w="100%" padding="0">
          <Slider {...settings}>
            {images.map((image) => (
              <Image
                w="100%"
                h="287px"
                cursor="pointer"
                src={image.src}
                key={image.id}
              />
            ))}
          </Slider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MobileMapSlider;
