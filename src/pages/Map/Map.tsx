import { Suspense } from 'react';
import MapComponent from './components/MapComponent';
import MapHeader from './components/MapHeader';
import MapSpinner from './components/Spinner';

const Map = () => {
  return (
    <>
      <MapHeader />
      <Suspense fallback={<MapSpinner />}>
        <MapComponent />
      </Suspense>
    </>
  );
};

export default Map;
