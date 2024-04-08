import { Flex } from '@chakra-ui/react';
import ItemTitle from '../ItemTitle';
import RecentPostItem from './RecentPostItem';

const MOCK = [
  {
    address: '강남구 역삼동',
    gardenName: '강남역삼동 텃밭',
    imageUrl: 'https://via.placeholder.com/150',
    isLiked: false,
    price: 100000,
    recruitEndDate: '2021-10-10',
    recruitStartDate: '2021-10-01',
    gardenId: 1,
    latitude: 37.495,
    longitude: 127.036,
  },
  {
    address: '강남구 역삼동',
    gardenName: '강남역삼동 텃밭',
    imageUrl: 'https://via.placeholder.com/150',
    isLiked: true,
    price: 1000000,
    recruitEndDate: '2021-10-10',
    recruitStartDate: '2021-10-01',
    gardenId: 1,
    latitude: 37.495,
    longitude: 127.036,
  },
  {
    address: '강남구 역삼동',
    gardenName: '강남역삼동 텃밭',
    imageUrl: 'https://via.placeholder.com/150',
    isLiked: true,
    price: 1000000,
    recruitEndDate: '2021-10-10',
    recruitStartDate: '2021-10-01',
    gardenId: 1,
    latitude: 37.495,
    longitude: 127.036,
  },
  {
    address: '강남구 역삼동',
    gardenName: '강남역삼동 텃밭',
    imageUrl: 'https://via.placeholder.com/150',
    isLiked: true,
    price: 1000000,
    recruitEndDate: '2021-10-10',
    recruitStartDate: '2021-10-01',
    gardenId: 1,
    latitude: 37.495,
    longitude: 127.036,
  },
  {
    address: '강남구 역삼동',
    gardenName: '강남역삼동 텃밭',
    imageUrl: 'https://via.placeholder.com/150',
    isLiked: true,
    price: 1000000,
    recruitEndDate: '2021-10-10',
    recruitStartDate: '2021-10-01',
    gardenId: 1,
    latitude: 37.495,
    longitude: 127.036,
  },
  {
    address: '강남구 역삼동',
    gardenName: '강남역삼동 텃밭',
    imageUrl: 'https://via.placeholder.com/150',
    isLiked: true,
    price: 1000000,
    recruitEndDate: '2021-10-10',
    recruitStartDate: '2021-10-01',
    gardenId: 1,
    latitude: 37.495,
    longitude: 127.036,
  },
];

const RecentPosts = () => {
  return (
    <Flex flexDir="column" m="0 auto" px="20px">
      <ItemTitle>방금 등록된 따끈따끈한 게시글!</ItemTitle>
      <Flex
        gap={{ mobile: '12px', tablet: '30px' }}
        maxW="1194px"
        overflowY="auto"
      >
        {MOCK.map((postData) => (
          <RecentPostItem key={postData.gardenId} postData={postData} />
        ))}
      </Flex>
    </Flex>
  );
};

export default RecentPosts;
