import { Suspense } from 'react';
import MapComponent from './components/MapComponent';
import MapHeader from './components/MapHeader';

const Map = () => {
  return (
    <>
      <MapHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <MapComponent />
      </Suspense>
    </>
  );
};

export default Map;
