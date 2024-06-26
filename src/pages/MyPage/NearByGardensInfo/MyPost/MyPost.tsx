import { List } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import GardenItem from '../../components/GardenItem';
import MobileEditButton from '../../components/MobileEditButton';
import { useGetNearByGardenMineLists } from '@/services/mypage/query';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

const MyPost = () => {
  const { data, fetchNextPage, hasNextPage } = useGetNearByGardenMineLists();
  const { ref } = useInfiniteScroll<HTMLDivElement>({
    fetchData: () => {
      fetchNextPage();
    },
    hasNextPage,
  });

  const [checkboxOpen, setCheckboxOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleCheck = (id: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  useEffect(() => {
    if (!checkboxOpen) {
      setCheckedItems({});
    }
  }, [checkboxOpen]);
  if (!data) return;
  if (data.length === 0) return <h1>게시글이 존재하지 않습니다.</h1>;

  return (
    <List w="100%" px={{ mobile: '20px', tablet: '0px' }}>
      <MobileEditButton
        checkboxOpen={checkboxOpen}
        setCheckboxOpen={setCheckboxOpen}
        checkedItems={checkedItems}
      />

      {data?.map((item, idx) => (
        <GardenItem
          key={item.gardenId}
          item={item}
          idx={idx}
          menu
          checkboxOpen={checkboxOpen}
          checkedItems={checkedItems}
          handleCheck={handleCheck}
        />
      ))}
      <div style={{ height: 100 }} ref={ref} />
    </List>
  );
};

export default MyPost;
