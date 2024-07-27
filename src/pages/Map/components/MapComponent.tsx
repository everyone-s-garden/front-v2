import { Box } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { Container as MapDiv, NaverMap, useNavermaps } from 'react-naver-maps';
import { useLocation } from 'react-router-dom';
import getGardenType from '../utils/getGardenType';
import GardensContainer from './GardensContainer';
import MapSpinner from './MapSpinner';
import MarkerCluster from './Marker/MarkerCluster';
import MyMarker from './Marker/MyMarker';
import useGeolocation from '@/hooks/useGeolocation';
import { useGetMapGardens } from '@/services/gardens/query';
import useShowGardenDetailStore from '@/stores/useShowGardenDetailStore';
import useShowGardensStore from '@/stores/useShowGardensStore';

interface MapComponentProps {
  map: naver.maps.Map | null;
  setMap: Dispatch<SetStateAction<naver.maps.Map | null>>;
  headerOption: string;
}

const MapComponent = ({ map, setMap, headerOption }: MapComponentProps) => {
  const location = useLocation();
  const navermaps = useNavermaps();
  const geolocation = useGeolocation();
  const gardenType = getGardenType(headerOption);
  const { showGardenDetail, setShowGardenDetail } = useShowGardenDetailStore();
  const { setShowGardens } = useShowGardensStore();

  useEffect(() => {
    setShowGardenDetail(location.state && location.state.data ? true : false);
    setShowGardens(location.state && location.state.data ? true : false);
  }, [location.state, setShowGardenDetail, setShowGardens]);

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

  if (!geolocation.loaded) {
    return <MapSpinner />;
  }

  const getDefaultCenter = () => {
    if (location.state && location.state.data) {
      return new navermaps.LatLng(
        location.state.data.lat,
        location.state.data.lng,
      );
    }

    return new navermaps.LatLng(position.lat, position.lng);
  };

  return (
    <Box
      position="relative"
      overflow="hidden"
      h={{ mobile: 'calc(100vh - 167px)', tablet: 'calc(100vh - 166px)' }}
      zIndex="0"
    >
      <GardensContainer
        {...{
          showGardenDetail,
          setShowGardenDetail,
          gardenType,
          map,
        }}
      />

      <MapDiv style={{ width: '100%', height: '100%' }}>
        <NaverMap
          ref={setMap}
          defaultCenter={getDefaultCenter()}
          defaultZoom={location.state && location.state.data ? 15 : 10}
          zoomControl
          zoomControlOptions={{
            style: naver.maps.ZoomControlStyle.SMALL,
            position: navermaps.Position.TOP_LEFT,
          }}
        >
          <MarkerCluster {...{ gardens, setShowGardens }} />
          <MyMarker navermaps={navermaps} position={position} />
        </NaverMap>
      </MapDiv>
    </Box>
  );
};

export default MapComponent;
