import { Box } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Container as MapDiv, NaverMap, useNavermaps } from 'react-naver-maps';
import { useLocation } from 'react-router-dom';
import getGardenType from '../utils/getGardenType';
import GardensContainer from './GardensContainer';
import MapSpinner from './MapSpinner';
import MarkerCluster from './Marker/MarkerCluster';
import MyMarker from './Marker/MyMarker';
import { useGetMapGardens } from '@/services/gardens/query';
import useMapGardenDetailIdStore from '@/stores/useMapGardenDetailIdStore';

interface MapComponentProps {
  map: naver.maps.Map | null;
  setMap: Dispatch<SetStateAction<naver.maps.Map | null>>;
  headerOption: string;
}

const MapComponent = ({ map, setMap, headerOption }: MapComponentProps) => {
  const location = useLocation();
  const navermaps = useNavermaps();
  // const geolocation = useGeolocation();
  const [isCurrentLocationLoaded, setIsCurrentLocationLoaded] = useState(false);
  const [position, setPosition] = useState({
    lat: 37.3595704,
    lng: 127.105399,
  });
  const gardenType = getGardenType(headerOption);
  const { gardenId } = useMapGardenDetailIdStore();
  const { data: mapGardens, refetch } = useGetMapGardens(gardenType, map);
  const gardens: Garden[] = mapGardens?.gardenByComplexesResponses;

  useEffect(() => {
    if (map) {
      refetch();

      const handleMapUpdate = () => {
        refetch();
      };

      const dragEndListener = naver.maps.Event.addListener(
        map,
        'dragend',
        handleMapUpdate,
      );

      const zoomChangedListener = naver.maps.Event.addListener(
        map,
        'zoom_changed',
        handleMapUpdate,
      );

      return () => {
        naver.maps.Event.removeListener(dragEndListener);
        naver.maps.Event.removeListener(zoomChangedListener);
      };
    }
  }, [map, refetch, headerOption]);

  // if (geolocation.loaded && !geolocation.error && geolocation.coordinates) {
  //   position = {
  //     lat: geolocation.coordinates.lat,
  //     lng: geolocation.coordinates.lng,
  //   };
  // }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setIsCurrentLocationLoaded(true);
        },
        () => {
          setIsCurrentLocationLoaded(true);
        },
      );
    } else {
      setIsCurrentLocationLoaded(true);
    }
  }, []);

  const getDefaultCenter = () => {
    if (gardenId && location.state && location.state.data) {
      return new navermaps.LatLng(
        location.state.data.lat,
        location.state.data.lng,
      );
    }

    return new navermaps.LatLng(position.lat, position.lng);
  };

  if (!isCurrentLocationLoaded) {
    return <MapSpinner />;
  }

  return (
    <Box
      position="relative"
      overflow="hidden"
      h={{ mobile: 'calc(100vh - 167px)', tablet: 'calc(100vh - 166px)' }}
      zIndex="0"
    >
      <GardensContainer
        {...{
          gardenType,
          map,
        }}
      />
      <MapDiv style={{ width: '100%', height: '100%' }}>
        <NaverMap
          ref={setMap}
          defaultCenter={getDefaultCenter()}
          defaultZoom={location.state && location.state.data ? 18 : 15}
          zoomControl
          zoomControlOptions={{
            style: naver.maps.ZoomControlStyle.SMALL,
            position: navermaps.Position.TOP_LEFT,
          }}
        >
          <MarkerCluster {...{ gardens }} />
          <MyMarker navermaps={navermaps} position={position} />
        </NaverMap>
      </MapDiv>
    </Box>
  );
};

export default MapComponent;
