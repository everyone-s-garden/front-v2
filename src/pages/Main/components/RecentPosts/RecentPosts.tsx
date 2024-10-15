import { Box, Flex, IconButton } from '@chakra-ui/react';
import { useRef } from 'react';
import { Navigation, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavigationOptions } from 'swiper/types';
import { MainArrow } from '@/assets/icons';
import ItemTitle from '../ItemTitle';
import RecentPostItem from './RecentPostItem';
import { useGetRecentGardenPosts } from '@/services/gardenPost/query';

const RecentPosts = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
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
            onBeforeInit={(swiper) => {
              const navigation = swiper.params.navigation as NavigationOptions;

              navigation.prevEl = prevRef.current;
              navigation.nextEl = nextRef.current;
            }}
            slidesPerView="auto"
            spaceBetween={15}
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
          <IconButton
            ref={prevRef}
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
            ref={nextRef}
            variant="unstyled"
            aria-label="right"
            position="absolute"
            top="50%"
            right="-15px"
            zIndex="10"
            transform="translateY(-50%)"
            icon={<MainArrow />}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default RecentPosts;
