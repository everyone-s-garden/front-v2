import { Box } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Container as MapDiv,
  Marker,
  NaverMap,
  useNavermaps,
} from 'react-naver-maps';
import GardensContainer from './GardensContainer';
import ShowGardensButton from './ShowGardensButton';

function MapComponent() {
  const [showGardens, setShowGardens] = useState(false);
  const navermaps = useNavermaps();

  const position = {
    lat: 37.3595704,
    lng: 127.105399,
  };

  return (
    <Box
      position="relative"
      h={{ mobile: 'calc(100vh - 167px)', tablet: 'calc(100vh - 165px)' }}
      bgColor="black"
    >
      <ShowGardensButton {...{ showGardens, setShowGardens }} />
      <AnimatePresence>{showGardens && <GardensContainer />}</AnimatePresence>

      <MapDiv style={{ width: '100%', height: '100%' }}>
        <NaverMap
          defaultCenter={new navermaps.LatLng(position.lat, position.lng)}
          defaultZoom={15}
        >
          <Marker position={new navermaps.LatLng(position.lat, position.lng)} />
        </NaverMap>
      </MapDiv>
    </Box>
  );
}

export default MapComponent;
