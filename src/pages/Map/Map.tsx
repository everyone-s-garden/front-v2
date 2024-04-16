import { Suspense, useState } from 'react';
import MapComponent from './components/MapComponent';
import MapHeader from './components/MapHeader';
import MapSpinner from './components/Spinner';

const Map = () => {
  const [map, setMap] = useState<naver.maps.Map | null>(null);

  return (
    <>
      <MapHeader map={map} />
      <Suspense fallback={<MapSpinner />}>
        <MapComponent map={map} setMap={setMap} />
      </Suspense>
    </>
  );
};

export default Map;
