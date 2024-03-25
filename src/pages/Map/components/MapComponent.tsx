import {
  Container as MapDiv,
  Marker,
  NaverMap,
  useNavermaps,
} from 'react-naver-maps';

function MapComponent() {
  const navermaps = useNavermaps();

  const position = {
    lat: 37.3595704,
    lng: 127.105399,
  };

  return (
    <MapDiv style={{ width: '100%', height: '600px' }}>
      <NaverMap
        defaultCenter={new navermaps.LatLng(position.lat, position.lng)}
        defaultZoom={15}
      >
        <Marker
          position={new navermaps.LatLng(position.lat, position.lng)}
          animation={2}
        />
      </NaverMap>
    </MapDiv>
  );
}

export default MapComponent;
