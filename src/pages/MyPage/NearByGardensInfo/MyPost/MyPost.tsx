import { List } from '@chakra-ui/react';
import { useState } from 'react';
import GardenItem from '../../components/GardenItem';
import MobileEditButton from '../../components/MobileEditButton';
import { BaseGardenItem } from '../../type';
import { useGetNearByGardenMineLists } from '@/services/mypage/query';

const MyPost = () => {
  const { data } = useGetNearByGardenMineLists();
  const [checkboxOpen, setCheckboxOpen] = useState(false);

  if (!data) return;

  const gardenData: BaseGardenItem[] = data.gardenMineResponses;
  if (gardenData.length === 0) return <h1>게시글이 없습니다.</h1>;

  return (
    <List w="100%" px={{ mobile: '20px', tablet: '0px' }}>
      <MobileEditButton
        checkboxOpen={checkboxOpen}
        setCheckboxOpen={setCheckboxOpen}
      />

      {gardenData.map((item, idx) => (
        <GardenItem
          key={item.gardenId}
          item={item}
          heart
          idx={idx}
          menu
          checkboxOpen={checkboxOpen}
        />
      ))}
    </List>
  );
};

export default MyPost;
