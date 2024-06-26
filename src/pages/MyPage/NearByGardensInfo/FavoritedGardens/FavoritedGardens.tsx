import { List } from '@chakra-ui/react';
import GardenItem from '../../components/GardenItem';
import { useGetNearByGardenLikeLists } from '@/services/mypage/query';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

const FavoritedGardens = () => {
  const { data, fetchNextPage, hasNextPage } = useGetNearByGardenLikeLists();
  const { ref } = useInfiniteScroll<HTMLDivElement>({
    fetchData: () => {
      fetchNextPage();
    },
    hasNextPage,
  });

  if (!data) return;

  if (data.length === 0) return <h1>게시글이 존재하지 않습니다.</h1>;

  return (
    <List w="100%" spacing="32px" px={{ mobile: '20px', tablet: '0px' }}>
      {data?.map((item, idx) => (
        <GardenItem key={item.gardenId} item={item} heart idx={idx} />
      ))}
      <div ref={ref} />
    </List>
  );
};

export default FavoritedGardens;
