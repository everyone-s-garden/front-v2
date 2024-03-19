import { Box, Icon } from '@chakra-ui/react';
import { NextIcon } from '@/assets/icons';
import { ArrowProps } from './ImageSlider';

const NextArrow = ({
  onClick,
  currentSlide,
  numberOfSlides,
  isMainPage,
}: ArrowProps) => {
  if (!numberOfSlides) return;

  return (
    currentSlide !== numberOfSlides - 1 && (
      <Box
        position="absolute"
        right="4%"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        cursor="pointer"
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        w={
          isMainPage
            ? undefined
            : {
                mobile: '28px',
                tablet: '36px',
              }
        }
        h={
          isMainPage
            ? undefined
            : {
                mobile: '28px',
                tablet: '36px',
              }
        }
        backgroundColor={isMainPage ? undefined : '#EBEBEB'}
        onClick={onClick}
      >
        <Icon
          as={NextIcon}
          w={
            isMainPage
              ? { mobile: '24px', tablet: '30px' }
              : { mobile: '14px', tablet: '18px' }
          }
          h={
            isMainPage
              ? { mobile: '24px', tablet: '30px' }
              : { mobile: '14px', tablet: '18px' }
          }
          fill={isMainPage ? undefined : '#BEBEBE'}
        />
      </Box>
    )
  );
};

export default NextArrow;
