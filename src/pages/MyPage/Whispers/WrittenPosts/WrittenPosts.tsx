import { List } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import MobileEditButton from '../../components/MobileEditButton';
import WhisperItem from '../../components/WhisperItem';
import { useGetWhisperMyPosts } from '@/services/mypage/query';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';

const WrittenPosts = () => {
  const { data, hasNextPage, fetchNextPage } = useGetWhisperMyPosts();
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
    <List w="full" px={{ mobile: '20px', tablet: '0px' }}>
      <MobileEditButton
        checkboxOpen={checkboxOpen}
        setCheckboxOpen={setCheckboxOpen}
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
      />
      {data?.map((item, idx) => (
        <WhisperItem
          key={item.postId}
          item={item}
          menu
          checkboxOpen={checkboxOpen}
          idx={idx}
          checkedItems={checkedItems}
          handleCheck={handleCheck}
        />
      ))}
      <div style={{ height: 100 }} ref={ref} />
    </List>
  );
};

export default WrittenPosts;
