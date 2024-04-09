import { Box } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  useNavermaps,
} from 'react-naver-maps';
import GardensContainer from './GardensContainer';
import CustomMarker from './Marker/CustomMarker';
import ShowGardensButton from './ShowGardensButton';
import MapSpinner from './Spinner';
import useGeolocation from '@/hooks/useGeolocation';
import { useGetEveryGardens } from '@/services/gardens/query';

const MapComponent = () => {
  const [showGardens, setShowGardens] = useState(false);
  const navermaps = useNavermaps();
  const geolocation = useGeolocation();
  const [loading, setLoading] = useState(true);
  const { data } = useGetEveryGardens();
  const gardens: Garden[] = data?.gardenGetAllResponses;

  const locations = gardens?.map((garden) => ({
    id: garden.gardenId,
    lat: garden.latitude,
    lng: garden.longitude,
  }));

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
      overflow="hidden"
      h={{ mobile: 'calc(100vh - 167px)', tablet: 'calc(100vh - 166px)' }}
      zIndex="0"
    >
      <ShowGardensButton {...{ showGardens, setShowGardens }} />
      <GardensContainer showGardens={showGardens} gardens={gardens} />

      <MapDiv style={{ width: '100%', height: '100%' }}>
        <NaverMap
          defaultCenter={new navermaps.LatLng(position.lat, position.lng)}
          defaultZoom={10}
          zoomControl
          zoomControlOptions={{
            style: naver.maps.ZoomControlStyle.SMALL,
            position: navermaps.Position.TOP_LEFT,
          }}
        >
          {locations.map((location) => (
            <Marker
              position={new navermaps.LatLng(location.lat, location.lng)}
              key={location.id}
              onClick={() => {
                setShowGardens(true);
              }}
            />
          ))}
          <CustomMarker navermaps={navermaps} position={position} />
        </NaverMap>
      </MapDiv>
    </Box>
  );
};

export default MapComponent;
