import { Box, Icon } from '@chakra-ui/react';
import { PrevIcon } from '@/assets/icons';
import { ArrowProps } from './ImageSlider';

const PrevArrow = ({ onClick, currentSlide, isMainPage }: ArrowProps) => {
  return (
    currentSlide !== 0 && (
      <Box
        position="absolute"
        left="4%"
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
          as={PrevIcon}
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

export default PrevArrow;
