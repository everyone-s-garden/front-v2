import { Box, Flex } from '@chakra-ui/react';
import { Navigation, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ItemTitle from '../ItemTitle';
import RecentPostItem from './RecentPostItem';
import { useGetRecentGardenPosts } from '@/services/gardenPost/query';
import './swiper.css';

const RecentPosts = () => {
  const { data: recentGardenPosts } = useGetRecentGardenPosts();

  if (!recentGardenPosts) {
    return null;
  }

  return (
    <Box px="20px">
      <Flex flexDir="column" m="0 auto" maxW="1194px">
        <ItemTitle>방금 등록된 따끈따끈한 게시글!</ItemTitle>
        <Box position="relative">
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            freeMode={true}
            modules={[FreeMode, Navigation]}
            style={{ width: '100%', zIndex: 0 }}
          >
            {recentGardenPosts.map((postData, idx) => (
              <SwiperSlide
                key={idx}
                style={{ width: 'fit-content', zIndex: 0 }}
              >
                <RecentPostItem postData={postData} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <IconButton
            className="swiper-button-prev"
            variant="unstyled"
            position="absolute"
            top="50%"
            left="-15px"
            zIndex="10"
            transform="translateY(-50%) rotate(180deg)"
            aria-label="left"
            icon={<MainArrow />}
          />
          <IconButton
            className="swiper-button-next"
            variant="unstyled"
            aria-label="right"
            position="absolute"
            top="50%"
            right="-15px"
            zIndex="10"
            transform="translateY(-50%)"
            icon={<MainArrow />}
          /> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default RecentPosts;
