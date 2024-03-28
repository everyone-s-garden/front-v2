import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  List,
  ListItem,
  Tag,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { AvatarComponent } from '@/components';
import { CommentIcon, HeartIcon } from '@/assets/icons';
import { POST } from '../../constants';
import { Post } from '../../types';

interface PostListProps {
  posts: Post[];
}

// TODO: 실제 데이터로 변경
const dummyData: Post[] = [
  {
    postId: 1,
    title: 'First Post',
    likeCount: 10,
    commentCount: 5,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    preview:
      'https://media.hellobot.co/fixedmenu/%E1%84%89%E1%85%B5%E1%84%85%E1%85%A9_%E1%84%8B%E1%85%A1%E1%84%86%E1%85%AE%20%E1%84%8B%E1%85%B5%E1%84%85%E1%85%B3%E1%86%B7%20%E1%84%8C%E1%85%B5%E1%86%BA%E1%84%80%E1%85%B5.png',
    userInfo: {
      userId: 1,
      profile: null,
      name: 'John Doe',
      memberMannerGrade: 'A',
    },
    postType: 'INFORMATION_SHARE',
    createdDate: '2024-03-28',
  },
  {
    postId: 2,
    title: 'Second Post',
    likeCount: 15,
    commentCount: 8,
    content:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    preview:
      'https://media.hellobot.co/fixedmenu/%E1%84%89%E1%85%B5%E1%84%85%E1%85%A9_%E1%84%8B%E1%85%A1%E1%84%86%E1%85%AE%20%E1%84%8B%E1%85%B5%E1%84%85%E1%85%B3%E1%86%B7%20%E1%84%8C%E1%85%B5%E1%86%BA%E1%84%80%E1%85%B5.png',
    userInfo: {
      userId: 2,
      profile: null,
      name: 'Jane Smith',
      memberMannerGrade: 'B',
    },
    postType: 'GARDEN_SHOWCASE',
    createdDate: '2024-03-27',
  },
  {
    postId: 3,
    title: 'Third Post',
    likeCount: 20,
    commentCount: 12,
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    preview: null,
    userInfo: {
      userId: 3,
      profile: null,
      name: 'Alice Johnson',
      memberMannerGrade: 'C',
    },
    postType: 'QUESTION',
    createdDate: '2024-03-26',
  },
  {
    postId: 4,
    title:
      'Fourth Post Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    likeCount: 8,
    commentCount: 3,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    preview:
      'https://media.hellobot.co/fixedmenu/%E1%84%89%E1%85%B5%E1%84%85%E1%85%A9_%E1%84%8B%E1%85%A1%E1%84%86%E1%85%AE%20%E1%84%8B%E1%85%B5%E1%84%85%E1%85%B3%E1%86%B7%20%E1%84%8C%E1%85%B5%E1%86%BA%E1%84%80%E1%85%B5.png',
    userInfo: {
      userId: 4,
      profile: null,
      name: 'David Brown',
      memberMannerGrade: 'D',
    },
    postType: 'ETC',
    createdDate: '2024-03-25',
  },
  {
    postId: 5,
    title: 'Fifth Post',
    likeCount: 25,
    commentCount: 15,
    content:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    preview: null,
    userInfo: {
      userId: 5,
      profile: null,
      name: 'Emily Wilson',
      memberMannerGrade: 'A+',
    },
    postType: 'INFORMATION_SHARE',
    createdDate: '2024-03-24',
  },
  {
    postId: 6,
    title: 'Sixth Post',
    likeCount: 18,
    commentCount: 10,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    preview:
      'https://media.hellobot.co/fixedmenu/%E1%84%89%E1%85%B5%E1%84%85%E1%85%A9_%E1%84%8B%E1%85%A1%E1%84%86%E1%85%AE%20%E1%84%8B%E1%85%B5%E1%84%85%E1%85%B3%E1%86%B7%20%E1%84%8C%E1%85%B5%E1%86%BA%E1%84%80%E1%85%B5.png',
    userInfo: {
      userId: 6,
      profile: null,
      name: 'Michael Lee',
      memberMannerGrade: 'B+',
    },
    postType: 'GARDEN_SHOWCASE',
    createdDate: '2024-03-23',
  },
  {
    postId: 7,
    title: 'Seventh Post',
    likeCount: 16,
    commentCount: 9,
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    preview: null,
    userInfo: {
      userId: 7,
      profile: null,
      name: 'Sophia Garcia',
      memberMannerGrade: 'C-',
    },
    postType: 'QUESTION',
    createdDate: '2024-03-22',
  },
];

const PostList = ({ posts }: PostListProps) => {
  console.log(posts);
  const navigate = useNavigate();

  const handleClickItem = (postId: number) => {
    navigate(`/community/${postId}`);
  };

  return (
    <List
      display={'flex'}
      flexDir={'column'}
      gap={{ mobile: '20px', tablet: '40px' }}
    >
      {dummyData.map(
        ({
          commentCount,
          content,
          likeCount,
          postId,
          postType,
          preview,
          title,
          userInfo,
        }) => (
          <ListItem
            key={postId}
            pb={{ mobile: '20px', tablet: '24px' }}
            borderBottom={'1px solid'}
            borderBottomColor={'gray.100'}
            __css={{
              h2: {
                display: '-webkit-box',
                WebkitLineClamp: {
                  mobile: 2,
                  tablet: 1,
                },
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              },
            }}
          >
            <Flex justify={'space-between'}>
              <Flex flexDir={'column'} gap={'8px'}>
                <Flex
                  gap={{ mobile: '8px', tablet: '10px' }}
                  flexDir={{ mobile: 'column', tablet: 'row' }}
                  align={{ tablet: 'center' }}
                >
                  <Tag
                    bg={'orange.200'}
                    px={{ mobile: '6px', tablet: '10px' }}
                    py={{ mobile: '4px', tablet: '6px' }}
                    h={'fit-content'}
                    w={'fit-content'}
                    fontSize={{ mobile: 14, tablet: 18 }}
                    flexShrink={0}
                  >
                    {POST.TYPE[postType]}
                  </Tag>
                  <Heading
                    as={'h2'}
                    fontSize={{ mobile: '16px', tablet: '20px' }}
                    fontWeight={'semiBold'}
                    h={{ mobile: '48px', tablet: 'fit-content' }}
                    noOfLines={{ mobile: 2, tablet: 1 }}
                    onClick={() => handleClickItem(postId)}
                    cursor={'pointer'}
                  >
                    {title}
                  </Heading>
                </Flex>
                <Text
                  hideBelow={'tablet'}
                  noOfLines={2}
                  fontSize={18}
                  height={'54px'}
                >
                  {content.replaceAll('\n', ' ')}
                </Text>
                <Flex align={'center'}>
                  <AvatarComponent
                    src={userInfo.profile || undefined}
                    name={userInfo.name}
                    w={'24px'}
                    h={'24px'}
                    mr={{ mobile: '6px', tablet: '8px' }}
                  />
                  <Text
                    fontSize={{ mobile: '14px', tablet: '18px' }}
                    fontWeight={'medium'}
                    mr={'10px'}
                    noOfLines={1}
                  >
                    {userInfo.name}
                  </Text>
                  <Icon
                    as={HeartIcon}
                    stroke={'sub'}
                    strokeWidth={2}
                    w={'18px'}
                    h={'18px'}
                    fill={'none'}
                    flexShrink={0}
                    mr={'4px'}
                    mt={'2px'}
                  />
                  <Text
                    fontWeight={'medium'}
                    fontSize={{ mobile: '14px', tablet: '16px' }}
                    color={'sub'}
                    mr={'10px'}
                    mt={'2px'}
                    flexShrink={0}
                  >
                    {likeCount}
                  </Text>
                  <Icon
                    as={CommentIcon}
                    w={'20px'}
                    h={'20px'}
                    fill={'sub'}
                    flexShrink={0}
                    mr={'2px'}
                  />
                  <Text
                    fontWeight={'medium'}
                    fontSize={{ mobile: '14px', tablet: '16px' }}
                    color={'sub'}
                    mt={'2px'}
                    flexShrink={0}
                  >
                    {commentCount}
                  </Text>
                </Flex>
              </Flex>
              <Box
                w={{ mobile: '106px', tablet: '132px' }}
                h={{ mobile: '106px', tablet: '132px' }}
                borderRadius={10}
                flexShrink={0}
                ml={{ mobile: '20px', tablet: '40px' }}
                overflow={'hidden'}
              >
                {preview && (
                  <Image
                    src={preview}
                    alt="Post Preview"
                    w={'100%'}
                    h={'100%'}
                    onClick={() => handleClickItem(postId)}
                    cursor={'pointer'}
                  />
                )}
              </Box>
            </Flex>
          </ListItem>
        ),
      )}
    </List>
  );
};

export default PostList;
