import { List } from '@chakra-ui/react';
import GardenItem from '../../components/GardenItem';
import NoContent from '../../components/NoContent';
import { RecentGardenItem } from '../../type';
import { useGetNearByGardenRecentLists } from '@/services/mypage/query';

const RecentlyViewedGardens = () => {
  const { data } = useGetNearByGardenRecentLists();

  if (!data) return;

  const gardenData: RecentGardenItem[] = data.recentGardenResponses;
  if (gardenData.length === 0)
    return <NoContent content="최근 본 텃밭이 없습니다." />;

  return (
    <List w="100%">
      {gardenData.map((item, idx) => (
        <GardenItem key={item.gardenId} item={item} idx={idx} />
      ))}
      <div style={{ height: 100 }} />
    </List>
  );
};

export default RecentlyViewedGardens;
