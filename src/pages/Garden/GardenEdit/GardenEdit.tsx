import { Box } from '@chakra-ui/react';
import ImageSelector from '@/components/ImageSelector/ImageSelector';

const GardenEdit = () => {
  return (
    <Box maxW={'704px'} px={'20px'} marginInline="auto">
      <ImageSelector
        color="green"
        breakPoints={{
          0: {
            slidesPerView: 2.5,
            spaceBetween: 14,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 12,
          },
        }}
        size={{ mobile: 100, tablet: 136, desktop: 136 }}
      />
    </Box>
  );
};

export default GardenEdit;
