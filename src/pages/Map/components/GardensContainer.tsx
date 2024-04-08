import { Show, chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import MapGardens from './MapGardens';
import MapNoGarden from './MapNoGarden';

const GardenContainer = chakra(motion.div);

interface GardensContainer {
  showGardens: boolean;
  gardens: Garden[];
}

const GardensContainer = ({ showGardens, gardens }: GardensContainer) => {
  return (
    <>
      <Show above="tablet">
        <GardenContainer
          w="378px"
          position="absolute"
          zIndex="1"
          h="100%"
          right="0"
          bgColor="white"
          borderWidth="1px 0 0 1px"
          borderColor="gray.200"
          initial={{ x: 379 }}
          animate={{
            x: showGardens ? 0 : 379,
            transition: { type: 'tween' },
          }}
        >
          {gardens.length === 0 ? (
            <MapNoGarden />
          ) : (
            <MapGardens gardens={gardens} />
          )}
        </GardenContainer>
      </Show>

      <Show below="tablet">
        <GardenContainer
          w="100%"
          position="absolute"
          zIndex="1"
          h="475px"
          bottom="0"
          bgColor="white"
          borderTop="1px"
          borderColor="gray.200"
          borderRadius="17px 17px 0 0"
          initial={{ y: 455 }}
          animate={{
            y: showGardens ? 0 : 455,
            transition: { type: 'tween' },
          }}
        >
          {gardens.length === 0 ? (
            <MapNoGarden />
          ) : (
            <MapGardens gardens={gardens} />
          )}
          <MapGardens gardens={gardens} />
        </GardenContainer>
      </Show>
    </>
  );
};

export default GardensContainer;
