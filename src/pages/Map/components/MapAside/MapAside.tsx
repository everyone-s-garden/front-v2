import { Box } from '@chakra-ui/react';
import GardenDetail from './components/GardenDetail/GardenDetail';
import GardenList from './components/GardenList/GardenList';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import useShowGardenDetailStore from '@/stores/useShowGardenDetailStore';

interface MapGardensProps {
  hasNext: boolean;
  fetchNextPage: () => void;
  hasNextPage: boolean;
  gardens: Garden[];
}

const MapAside = ({
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
  const showGardenDetail = useShowGardenDetailStore(
    (state) => state.showGardenDetail,
  );

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
