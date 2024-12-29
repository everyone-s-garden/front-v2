import { List } from '@chakra-ui/react';
import GardenItem from '../../components/GardenItem';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import NoContent from '@/pages/MyPage/components/NoContent';
import { useGetNearByGardenLikeLists } from '@/services/mypage/query';

const FavoritedGardens = () => {
  const { data, fetchNextPage, hasNextPage } = useGetNearByGardenLikeLists();
  const { ref } = useInfiniteScroll<HTMLDivElement>({
    fetchData: () => {
      fetchNextPage();
    },
    hasNextPage,
  });

  if (!data) return;

  if (data.length === 0)
    return (
      <NoContent content={`등록된 글이 없습니다.\n새로운 글을 등록해보세요!`} />
    );

  return (
    <List w="100%" spacing="32px" px={{ mobile: '20px', tablet: '0px' }}>
      {data?.map((item, idx) => (
        <GardenItem key={item.gardenId} item={item} heart idx={idx} />
      ))}
      <div style={{ height: 100 }} ref={ref} />
    </List>
  );
};

export default FavoritedGardens;
