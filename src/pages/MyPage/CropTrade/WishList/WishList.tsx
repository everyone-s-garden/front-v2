import { List } from '@chakra-ui/react';
import GardenItem from '../../components/GardenItem';
import { CropTrade } from '../../type';
import { useGetBookmarkLists } from '@/services/mypage/query';

const WishList = () => {
  const { data } = useGetBookmarkLists();

  if (!data) return;
  const cropData: CropTrade[] = data.cropInfos;

  if (cropData.length === 0) return <h1>게시글이 없습니다.</h1>;
  return (
    <List w="100%" spacing="32px" px={{ mobile: '20px', tablet: '0px' }}>
      {cropData.map((item, idx) => (
        <GardenItem key={item.cropPostId} item={item} idx={idx} heart />
      ))}
    </List>
  );
};

export default WishList;
