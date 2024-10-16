import {
  chakra,
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

const StyledSlider = chakra(Slider);

const MobileMapSlider = ({ images, isOpen, onClose }: MapSliderModalProps) => {
  const settings = {
    dots: images.length > 1,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Modal isOpen={isOpen} onClose={() => {}} isCentered>
      <ModalOverlay bgColor="#000" />
      <ModalContent w="100%" h="287px" m="0">
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
        <ModalBody h="100%" w="100%" padding="0">
          <StyledSlider
            {...settings}
            __css={{
              '.slick-dots > li > button:before': {
                opacity: 0.25,
                color: 'white',
              },
              '.slick-dots > li.slick-active > button:before': {
                opacity: 1,
              },
            }}
          >
            {images.map((image, i) => (
              <Image
                w="100%"
                h="287px"
                cursor="pointer"
                src={image || MapGardenNoImg}
                key={i}
              />
            ))}
          </StyledSlider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MobileMapSlider;
