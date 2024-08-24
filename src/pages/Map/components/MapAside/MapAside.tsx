import { Box } from '@chakra-ui/react';
import GardenDetail from './components/GardenDetail/GardenDetail';
import GardenList from './components/GardenList/GardenList';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

interface MapGardensProps {
  showGardenDetail: boolean;
  hasNext: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  gardens: Garden[];
}

const MapAside = ({
  showGardenDetail,
  hasNext,
  fetchNextPage,
  hasNextPage,
  gardens,
}: MapGardensProps) => {
  const { ref } = useInfiniteScroll<HTMLDivElement>({
    fetchData: () => {
      if (hasNext) fetchNextPage();
    },
    hasNextPage,
  });

  return (
    <Box position="relative">
      <Box
        h={{ mobile: '475px', tablet: 'calc(100vh - 166px)' }}
        overflow={showGardenDetail ? 'hidden' : 'auto'}
      >
        <GardenList gardens={gardens} />
        {showGardenDetail && <GardenDetail />}
        {hasNext && <Box ref={ref} h="10px" />}
      </Box>
    </Box>
  );
};

export default MapAside;
