import { Box, Icon } from '@chakra-ui/react';
import { NextIcon, PrevIcon } from '@/assets/icons';
import { ArrowProps } from './ImageSlider';

const Arrow = ({
  onClick,
  currentSlide,
  numberOfSlides,
  arrowStyle,
  dir,
}: ArrowProps) => {
  if (!numberOfSlides) return;

  const isPrev = dir === 'prev';
  const disabled = isPrev
    ? currentSlide === 0
    : currentSlide === numberOfSlides - 1;

  if (disabled || !numberOfSlides) return;

  const positionProps = isPrev ? { left: '4%' } : { right: '4%' };
  const IconComponent = isPrev ? PrevIcon : NextIcon;

  const isPlain = arrowStyle === 'plain';

  return (
    <Box
      position="absolute"
      {...positionProps}
      top="50%"
      transform="translateY(-50%)"
      zIndex="1"
      cursor="pointer"
      borderRadius="50%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      w={isPlain ? undefined : { mobile: '28px', tablet: '36px' }}
      h={isPlain ? undefined : { mobile: '28px', tablet: '36px' }}
      backgroundColor={isPlain ? undefined : '#EBEBEB'}
      onClick={onClick}
    >
      <Icon
        as={IconComponent}
        w={
          isPlain
            ? { mobile: '24px', tablet: '30px' }
            : { mobile: '14px', tablet: '18px' }
        }
        h={
          isPlain
            ? { mobile: '24px', tablet: '30px' }
            : { mobile: '14px', tablet: '18px' }
        }
        fill={isPlain ? undefined : '#BEBEBE'}
      />
    </Box>
  );
};

export default Arrow;
