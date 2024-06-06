import { List } from '@chakra-ui/react';
import GardenItem from '../../components/GardenItem';
import { RecentGardenItem } from '../../type';
import { useGetNearByGardenRecentLists } from '@/services/mypage/query';

const RecentlyViewedGardens = () => {
  const { data } = useGetNearByGardenRecentLists();

  if (!data) return;

  const gardenData: RecentGardenItem[] = data.recentGardenResponses;
  if (gardenData.length === 0) return <h1>게시글이 없습니다.</h1>;

  return (
    <List w="100%" spacing="32px" px={{ mobile: '20px', tablet: '0px' }}>
      {gardenData.map((item, idx) => (
        <GardenItem key={item.gardenId} item={item} idx={idx} />
      ))}
    </List>
  );
};

export default RecentlyViewedGardens;
