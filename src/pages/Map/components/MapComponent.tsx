import { Box } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Container as MapDiv, NaverMap, useNavermaps } from 'react-naver-maps';
import GardensContainer from './GardensContainer';
import MapSpinner from './MapSpinner';
import GardenMarker from './Marker/GardenMarker';
import MyMarker from './Marker/MyMarker';
import useGeolocation from '@/hooks/useGeolocation';
import gardensApi from '@/services/gardens/api';
import { gardensQuery } from '@/services/gardens/query';
import useMapGardenDetailIdStore from '@/stores/useMapGardenDetailIdStore';

interface MapComponentProps {
  map: naver.maps.Map | null;
  setMap: Dispatch<SetStateAction<naver.maps.Map | null>>;
  headerOption: string;
}

const MapComponent = ({ map, setMap, headerOption }: MapComponentProps) => {
  const [showGardens, setShowGardens] = useState(false);
  const [showGardenDetail, setShowGardenDetail] = useState(false);
  const navermaps = useNavermaps();
  const geolocation = useGeolocation();
  const { setGardenId } = useMapGardenDetailIdStore();

  let gardenType: 'PUBLIC' | 'PRIVATE' | 'ALL';

  switch (headerOption) {
    case '공공':
      gardenType = 'PUBLIC';
      break;

    case '개인':
      gardenType = 'PRIVATE';
      break;

    case '둘다 표시':
      gardenType = 'ALL';
      break;

    default:
      break;
  }

  const fetchGardnesInBounds = () =>
    gardensApi.getGardensInBounds(gardenType, map);

  const { data, refetch } = useQuery({
    queryKey: [...gardensQuery.all()],
    queryFn: fetchGardnesInBounds,
    enabled: map !== null,
  });

  const gardens: Garden[] = data?.gardenByComplexesResponses;

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

  return (
    <Box
      position="relative"
      overflow="hidden"
      h={{ mobile: 'calc(100vh - 167px)', tablet: 'calc(100vh - 166px)' }}
      zIndex="0"
    >
      <GardensContainer
        {...{
          showGardens,
          setShowGardens,
          showGardenDetail,
          setShowGardenDetail,
          gardens,
        }}
      />

      <MapDiv style={{ width: '100%', height: '100%' }}>
        <NaverMap
          ref={setMap}
          defaultCenter={new navermaps.LatLng(position.lat, position.lng)}
          defaultZoom={10}
          zoomControl
          zoomControlOptions={{
            style: naver.maps.ZoomControlStyle.SMALL,
            position: navermaps.Position.TOP_LEFT,
          }}
        >
          {gardens?.map((garden) => (
            <GardenMarker
              navermaps={navermaps}
              position={new navermaps.LatLng(garden.latitude, garden.longitude)}
              key={garden.gardenId}
              onClick={() => {
                setShowGardens(true);
                setShowGardenDetail(true);
                setGardenId(garden.gardenId);
              }}
            />
          ))}
          <MyMarker navermaps={navermaps} position={position} />
        </NaverMap>
      </MapDiv>
    </Box>
  );
};

export default MapComponent;
