import { Box } from '@chakra-ui/layout';
import { Suspense } from 'react';
import MapComponent from './components/MapComponent';
import MapHeader from './components/MapHeader';

const Map = () => {
  return (
    <Box overflow={'hidden'}>
      <MapHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <MapComponent />
      </Suspense>
    </Box>
  );
};

export default Map;
