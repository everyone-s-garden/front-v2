import { List } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import GardenItem from '../../components/GardenItem';
import MobileEditButton from '../../components/MobileEditButton';
import {
  useDeletePost,
  useGetNearByGardenMineLists,
} from '@/services/mypage/query';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useLocation } from 'react-router-dom';

const MyPost = () => {
  const { data, fetchNextPage, hasNextPage } = useGetNearByGardenMineLists();
  const { pathname } = useLocation();
  const { mutate: deletePost } = useDeletePost();
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

  const handleDelete = (id?: number) => {
    if (id) {
      deletePost({ path: pathname, id });
    } else {
      Object.keys(checkedItems).forEach((key) => {
        if (checkedItems[key]) {
          deletePost({ path: pathname, id: +key });
        }
      });
    }
    setCheckedItems({});
    setCheckboxOpen(false);
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
        handleDelete={handleDelete}
      />

      {data?.map((item, idx) => (
        <GardenItem
          key={item.gardenId}
          item={item}
          menu
          idx={idx}
          checkboxOpen={checkboxOpen}
          checkedItems={checkedItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
      <div style={{ height: 100 }} ref={ref} />
    </List>
  );
};

export default MyPost;
