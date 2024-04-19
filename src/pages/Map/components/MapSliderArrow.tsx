import { Box, Icon } from '@chakra-ui/react';
import { NextIcon, PrevIcon } from '@/assets/icons';

interface MapSliderArrowProps {
  dir: 'prev' | 'next';
  onClick?: () => void;
}

const MapSliderArrow = ({ dir, onClick }: MapSliderArrowProps) => {
  let arrowIcon;

  if (dir === 'next') arrowIcon = NextIcon;
  else if (dir === 'prev') arrowIcon = PrevIcon;

  return (
    <Box
      position="fixed"
      top="50%"
      transform="translateY(-50%)"
      cursor="pointer"
      left={dir === 'prev' ? '50px' : undefined}
      right={dir === 'next' ? '50px' : undefined}
      zIndex="1"
      onClick={onClick}
    >
      <Icon
        w="28px"
        h="48px"
        fill="rgba(255, 255, 255, 0.70);"
        as={arrowIcon}
      />
    </Box>
  );
};

export default MapSliderArrow;
