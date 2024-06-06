import { List } from '@chakra-ui/react';
import GardenItem from '../../components/GardenItem';
import { useGetNearByGardenLikeLists } from '@/services/mypage/query';
import { BaseGardenItem } from '../../type';

const FavoritedGardens = () => {
  const { data } = useGetNearByGardenLikeLists();

  if (!data) return;

  const gardenData: BaseGardenItem[] = data.gardenLikeByMemberResponses;
  if (gardenData.length === 0) return <h1>게시글이 없습니다.</h1>;

  return (
    <List w="100%" spacing="32px" px={{ mobile: '20px', tablet: '0px' }}>
      {gardenData.map((item, idx) => (
        <GardenItem key={item.gardenId} item={item} heart idx={idx} />
      ))}
    </List>
  );
};

export default FavoritedGardens;
