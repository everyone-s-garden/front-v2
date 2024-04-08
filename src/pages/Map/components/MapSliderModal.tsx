import {
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import MapSliderArrow from './MapSliderArrow';

const images = [
  {
    id: 1,
    src: 'https://s3-alpha-sig.figma.com/img/260d/cf56/ae3a3e0756812f18eecb200f5aa341a3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FTEevLd1T3lQmJjKqDh-MM4hY0E6GX1gWMgPFfVkUrYrYYgx0Id0zPioeQvrPp1Rkc~rOcZROBqGf0ElPJZnBFlURZ~okNw2XwgNTbFEF4f9JvDRGMpNSAcRrxbvRLSIYr9B~~SjOZDRKY5f5QMbbUvjgHxPpdSG~ctYqbet2qDhHeOFemrdicvTbDF5QimDqEZjpwBVmajBn6aIaz24YMte1mbGv~xoHheAZrne97oqvaUlIrnLlPL2df0j0dzbZCkr-3mJQczScxJwa~IN0iznuXuFDGqRa6vbTPaNbPmOLidJahLJIOkkE5J-ehNySgwMszDz2SWlVp0vZNAnPg__',
  },
  {
    id: 2,
    src: 'https://s3-alpha-sig.figma.com/img/260d/cf56/ae3a3e0756812f18eecb200f5aa341a3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FTEevLd1T3lQmJjKqDh-MM4hY0E6GX1gWMgPFfVkUrYrYYgx0Id0zPioeQvrPp1Rkc~rOcZROBqGf0ElPJZnBFlURZ~okNw2XwgNTbFEF4f9JvDRGMpNSAcRrxbvRLSIYr9B~~SjOZDRKY5f5QMbbUvjgHxPpdSG~ctYqbet2qDhHeOFemrdicvTbDF5QimDqEZjpwBVmajBn6aIaz24YMte1mbGv~xoHheAZrne97oqvaUlIrnLlPL2df0j0dzbZCkr-3mJQczScxJwa~IN0iznuXuFDGqRa6vbTPaNbPmOLidJahLJIOkkE5J-ehNySgwMszDz2SWlVp0vZNAnPg__',
  },
  {
    id: 3,
    src: 'https://s3-alpha-sig.figma.com/img/260d/cf56/ae3a3e0756812f18eecb200f5aa341a3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FTEevLd1T3lQmJjKqDh-MM4hY0E6GX1gWMgPFfVkUrYrYYgx0Id0zPioeQvrPp1Rkc~rOcZROBqGf0ElPJZnBFlURZ~okNw2XwgNTbFEF4f9JvDRGMpNSAcRrxbvRLSIYr9B~~SjOZDRKY5f5QMbbUvjgHxPpdSG~ctYqbet2qDhHeOFemrdicvTbDF5QimDqEZjpwBVmajBn6aIaz24YMte1mbGv~xoHheAZrne97oqvaUlIrnLlPL2df0j0dzbZCkr-3mJQczScxJwa~IN0iznuXuFDGqRa6vbTPaNbPmOLidJahLJIOkkE5J-ehNySgwMszDz2SWlVp0vZNAnPg__',
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
