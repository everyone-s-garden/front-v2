import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import { MapGardenNoImg } from '@/assets/images';
import MapSliderArrow from './MapSliderArrow';

interface MapSliderModalProps {
  images: (string | null)[];
  isOpen: boolean;
  onClose: () => void;
}

const MapSliderModal = ({ images, isOpen, onClose }: MapSliderModalProps) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: images.length > 1,
    nextArrow: <MapSliderArrow dir="next" />,
    prevArrow: <MapSliderArrow dir="prev" />,
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxWidth="fit-content">
        <ModalBody w="768px" maxH="567px" padding="0">
          <Slider {...settings}>
            {images.map((image, i) => {
              let src;
              if (!image) src = MapGardenNoImg;
              else src = image;

              return <Image h="567px" cursor="pointer" src={src} key={i} />;
            })}
          </Slider>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MapSliderModal;
