import { Box } from '@chakra-ui/react';
import { Suspense, useState } from 'react';
import MapComponent from './components/MapComponent';
import MapHeader from './components/MapHeader';
import MapSpinner from './components/MapSpinner';

const Map = () => {
  const mapHeaderOptionsArray = ['공공', '개인', '둘다 표시'];
  const [headerOption, setHeaderOption] = useState(mapHeaderOptionsArray[2]);
  const [map, setMap] = useState<naver.maps.Map | null>(null);

  return (
    <Box>
      <MapHeader
        {...{ map, mapHeaderOptionsArray, headerOption, setHeaderOption }}
      />
      <Suspense fallback={<MapSpinner />}>
        <MapComponent {...{ map, setMap, headerOption }} />
      </Suspense>
    </Box>
  );
};

export default Map;
