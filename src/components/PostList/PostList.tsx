import {
  Box,
  Flex,
  Icon,
  Image,
  List,
  ListItem,
  Tag,
  Text,
} from '@chakra-ui/react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AvatarComponent } from '@/components';
import { CommentIcon, HeartIcon } from '@/assets/icons';
import { POST } from '@/pages/Community/constants';
import { Post } from '@/pages/Community/types';

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  const navigate = useNavigate();

  const getPlainText = useCallback((content: string) => {
    const $div = document.createElement('div');
    $div.innerHTML = content;

    return $div.textContent || $div.innerText || '';
  }, []);

  const handleClickItem = (postId: number) => {
    navigate(`/community/${postId}`);
  };

  return (
    <List
      display={'flex'}
      flexDir={'column'}
      gap={{ mobile: '20px', tablet: '40px' }}
    >
      {posts.map(
        ({
          commentCount,
          content,
          likeCount,
          postId,
          postType,
          preview,
          title,
          userInfo,
          isLikeClick,
        }) => (
          <ListItem
            key={postId}
            pb={{ mobile: '20px', tablet: '24px' }}
            borderBottom={'1px solid'}
            borderBottomColor={'gray.100'}
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
                  <Text
                    as={'h2'}
                    fontSize={{ mobile: '16px', tablet: '20px' }}
                    fontWeight={'semiBold'}
                    h={{ mobile: '48px', tablet: 'fit-content' }}
                    lineHeight={'24px'}
                    noOfLines={{ mobile: 2, tablet: 1 }}
                    wordBreak={'break-all'}
                    overflowWrap={'anywhere'}
                    onClick={() => handleClickItem(postId)}
                    cursor={'pointer'}
                    w={'100%'}
                  >
                    {title}
                  </Text>
                </Flex>
                <Text
                  hideBelow={'tablet'}
                  noOfLines={2}
                  fontSize={18}
                  height={'54px'}
                  whiteSpace={'normal'}
                  wordBreak={'break-all'}
                  overflowWrap={'anywhere'}
                >
                  {getPlainText(content)}
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
                    fill={isLikeClick ? 'sub' : 'none'}
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
