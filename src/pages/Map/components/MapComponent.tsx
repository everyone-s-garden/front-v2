import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Container as MapDiv, NaverMap, useNavermaps } from 'react-naver-maps';
import GardensContainer from './GardensContainer';
import CustomMarker from './Marker/CustomMarker';
import ShowGardensButton from './ShowGardensButton';
import MapSpinner from './Spinner';
import useGeolocation from '@/hooks/useGeolocation';

const MapComponent = () => {
  const [showGardens, setShowGardens] = useState(false);
  const navermaps = useNavermaps();
  console.log(navermaps);
  const geolocation = useGeolocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (geolocation.loaded) {
      setLoading(false);
    }
  }, [geolocation.loaded]);

  let position = {
    lat: 37.3595704,
    lng: 127.105399,
  };

  if (geolocation.loaded && !geolocation.error && geolocation.coordinates) {
    position = {
      lat: geolocation.coordinates.lat,
      lng: geolocation.coordinates.lng,
    };
  }

  if (loading) {
    return <MapSpinner />;
  }

  return (
    <Box
      position="relative"
      h={{ mobile: 'calc(100vh - 167px)', tablet: 'calc(100vh - 165px)' }}
      bgColor="black"
    >
      <ShowGardensButton {...{ showGardens, setShowGardens }} />
      <GardensContainer showGardens={showGardens} />

      <MapDiv style={{ width: '100%', height: '100%' }}>
        <NaverMap
          defaultCenter={new navermaps.LatLng(position.lat, position.lng)}
          defaultZoom={10}
        >
          <CustomMarker navermaps={navermaps} position={position} />
        </NaverMap>
      </MapDiv>
    </Box>
  );
};

export default MapComponent;
