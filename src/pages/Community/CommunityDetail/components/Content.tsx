import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useLocation, useNavigate } from 'react-router';
import { ImageSlider, TagComponent } from '@/components';
import getRelativeTime from '../../../../utils/getRelativeTime';
import { POST } from '../../constants';
import AuthorInfo from './AuthorInfo';
import { PATH } from '@/routes/constants';
import { useGetPost } from '@/services/whisper/query';

const Content = () => {
  const { pathname } = useLocation();
  const postId = pathname.split('/').pop();
  const { data } = useGetPost(Number(postId));
  const navigate = useNavigate();

  const handleClickReport = () => {
    navigate(PATH.REPORT, {
      state: {
        from: pathname,
        name: 'community_post',
        color: 'orange',
        reportId: postId,
      },
    });
  };

  if (!data) return null;

  const { title, content, images, userInfo, createdDate, postType } = data;

  return (
    <Box>
      <Flex flexDir={'column'}>
        <Flex
          flexDir={{ mobile: 'column', tablet: 'row' }}
          alignItems={{ mobile: 'baseline', tablet: 'center' }}
          gap={'10px'}
        >
          <TagComponent variant={'whisper'} tagLabel={POST.TYPE[postType]} />
          <Text
            as={'h1'}
            fontSize={{ mobile: '18px', tablet: '24px' }}
            fontWeight={'semiBold'}
          >
            {title}
          </Text>
        </Flex>
        <Text
          fontSize={{ mobile: '14px', tablet: '16px' }}
          color={'sub'}
          mt={'10px'}
        >
          {getRelativeTime(createdDate)}
        </Text>
      </Flex>

      {images.length > 0 && (
        <Box
          maxW={988}
          w={'calc(100% + 40px)'}
          m={{ mobile: '20px 0 20px -20px', tablet: '26px auto 0 auto' }}
          __css={{
            '.slick-slide img': {
              objectFit: 'scale-down',
              maxH: '600px',
            },
            '.slick-track': {
              display: 'flex',
              alignItems: 'center',
            },
          }}
        >
          <ImageSlider arrowStyle="circle" numberOfSlides={images.length}>
            {images.map((image) => (
              <Image src={image} alt="게시글 이미지" key={nanoid()} />
            ))}
          </ImageSlider>
        </Box>
      )}

      <Box
        mt={{ mobile: '20px', tablet: '24px' }}
        mb={{ mobile: '28px', tablet: '50px' }}
        dangerouslySetInnerHTML={{ __html: content }}
        __css={{
          '.align-right': {
            textAlign: 'right',
          },
          '.align-center': {
            textAlign: 'center',
          },
          fontWeight: 'medium',
          h1: {
            fontSize: '20px',
            fontWeight: 'bold',
          },
          h2: {
            fontSize: '18px',
            fontWeight: 'semiBold',
          },
          h3: {
            fontSize: '14px',
            fontWeight: 'medium',
          },
          '& > div': {
            h: '24px',
          },
          em: {
            fontStyle: 'italic',
          },
        }}
      />

      <Flex justify={'flex-end'}>
        <Text
          fontWeight={'medium'}
          color={'sub'}
          decoration={'underline'}
          textUnderlineOffset={'3px'}
          mb={'20px'}
          cursor={'pointer'}
          w={'fit-content'}
          onClick={handleClickReport}
        >
          글 신고하기
        </Text>
      </Flex>

      <Box
        w={{ mobile: 'calc(100% + 40px)', tablet: 'auto' }}
        m={{ mobile: '20px 0 20px -20px', tablet: '0 auto 0 auto' }}
        borderY={'1px solid'}
        borderColor={'gray.100'}
      >
        <AuthorInfo {...userInfo} />
      </Box>
    </Box>
  );
};

export default Content;
