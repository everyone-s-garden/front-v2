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

const MapSliderModal = ({ isOpen, onClose }: MapSliderModalProps) => {
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
            {images.map((image) => (
              <Image
                h="567px"
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

export default MapSliderModal;
