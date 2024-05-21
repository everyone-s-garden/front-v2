import { Spinner as ChakraSpinner } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';

const MapSpinner = () => {
  return (
    <Center
      h={{ mobile: 'calc(100vh - 167px)', tablet: 'calc(100vh - 165px)' }}
    >
      <ChakraSpinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
      />
    </Center>
  );
};

export default MapSpinner;
