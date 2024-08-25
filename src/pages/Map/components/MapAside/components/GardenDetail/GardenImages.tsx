import { Box, Icon, Image, Show, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import Slider from 'react-slick';
import { MapSliderLeftIcon, MapSliderRightIcon } from '@/assets/icons';
import { MapGardenNoImg } from '@/assets/images';
import GardenStatus from '../GardenStatus';
import MapSliderModal from './MapSliderModal';
import MobileMapSlider from './MobileMapSlider';

const GardenImages = ({ gardenInfo }: { gardenInfo: GardenDetail }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dragging, setDragging] = useState(false);

  const hasImages = gardenInfo.images.length && gardenInfo.images[0];

  const handleBeforeChange = () => {
    setDragging(true);
  };

  const handleAfterChange = () => {
    setDragging(false);
  };

  const handleClickImage = () => {
    if (!dragging && hasImages) {
      onOpen();
    }
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    arrows: gardenInfo.images.length > 1,
    nextArrow: (
      <Box
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        right="15px"
        zIndex="1"
      >
        <Icon fill="rgba(255, 255, 255, 0.70);" as={MapSliderRightIcon} />
      </Box>
    ),
    prevArrow: (
      <Box
        position="absolute"
        top="50%"
        transform="translateY(-50%)"
        left="15px"
        zIndex="1"
      >
        <Icon fill="rgba(255, 255, 255, 0.70);" as={MapSliderLeftIcon} />
      </Box>
    ),
  };

  return (
    <>
      <GardenStatus gardenStatus={gardenInfo.gardenStatus} type="detail" />
      <Box h="327px" position="relative">
        <Slider {...settings}>
          {gardenInfo.images.map((image, i) => {
            return (
              <Image
                w="100%"
                h="327px"
                cursor={hasImages ? 'pointer' : 'default'}
                src={image || MapGardenNoImg}
                key={i}
                onClick={handleClickImage}
              />
            );
          })}
        </Slider>
      </Box>
      <Show above="tablet">
        {isOpen && (
          <MapSliderModal
            images={gardenInfo.images}
            isOpen={isOpen}
            onClose={onClose}
          />
        )}
      </Show>
      <Show below="tablet">
        {isOpen && (
          <MobileMapSlider
            images={gardenInfo.images}
            isOpen={isOpen}
            onClose={onClose}
          />
        )}
      </Show>
    </>
  );
};

export default GardenImages;
