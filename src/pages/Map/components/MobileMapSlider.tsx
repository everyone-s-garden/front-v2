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
import { CloseSecondaryIcon } from '@/assets/icons';
import { MapGardenNoImg } from '@/assets/images';

interface MapSliderModalProps {
  images: (string | null)[];
  isOpen: boolean;
  onClose: () => void;
}

const MobileMapSlider = ({ images, isOpen, onClose }: MapSliderModalProps) => {
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
          as={CloseSecondaryIcon}
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
            {images.map((image, i) => {
              let src;
              if (!image) src = MapGardenNoImg;
              else src = image;

              return (
                <Image w="100%" h="287px" cursor="pointer" src={src} key={i} />
              );
            })}
          </Slider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MobileMapSlider;
