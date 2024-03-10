import { Box } from '@chakra-ui/react';
import ImageSelector from '@/components/ImageSelector';

const GardenEdit = () => {
  return (
    <Box maxW={1152} px={20} marginInline="auto">
      <ImageSelector color="green" h={{ mobile: 100, tablet: 150 }} />
    </Box>
  );
};

export default GardenEdit;
