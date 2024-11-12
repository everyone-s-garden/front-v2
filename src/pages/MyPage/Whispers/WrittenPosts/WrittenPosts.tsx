import { List } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MobileEditButton from '../../components/MobileEditButton';
import NoContent from '../../components/NoContent';
import WhisperItem from '../../components/WhisperItem';
import useInfiniteScroll from '@/hooks/useInfiniteScroll';
import { useDeletePost, useGetWhisperMyPosts } from '@/services/mypage/query';

const WrittenPosts = () => {
  const { data, hasNextPage, fetchNextPage } = useGetWhisperMyPosts();
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

  if (data.length === 0)
    return (
      <NoContent content={`등록된 글이 없습니다.\n새로운 글을 등록해보세요!`} />
    );

  return (
    <List w="full">
      <MobileEditButton
        checkboxOpen={checkboxOpen}
        setCheckboxOpen={setCheckboxOpen}
        handleDelete={handleDelete}
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
          handleDelete={handleDelete}
        />
      ))}
      <div style={{ height: 100 }} ref={ref} />
    </List>
  );
};

export default WrittenPosts;
