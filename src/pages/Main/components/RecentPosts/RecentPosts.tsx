import { Box, Flex } from '@chakra-ui/react';
import { Navigation, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ItemTitle from '../ItemTitle';
import RecentPostItem from './RecentPostItem';
import { useGetRecentGardenPosts } from '@/services/gardenPost/query';

import './swiperNavigationArrow.css';

const RecentPosts = () => {
  const { data: recentGardenPosts } = useGetRecentGardenPosts();

  if (!recentGardenPosts) {
    return null;
  }

  return (
    <Box px="20px">
      <Flex flexDir="column" m="0 auto" maxW="1194px">
        <ItemTitle>방금 등록된 따끈따끈한 게시글!</ItemTitle>
        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          style={{ width: '100%' }}
        >
          {recentGardenPosts.map((postData, idx) => (
            <SwiperSlide key={idx} style={{ width: 'fit-content' }}>
              <RecentPostItem postData={postData} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Box>
  );
};

export default RecentPosts;
