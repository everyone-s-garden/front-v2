import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { ImageSlider, TagComponent } from '@/components';
import getRelativeTime from '../../../../utils/getRelativeTime';
import { POST } from '../../constants';
import AuthorInfo from './AuthorInfo';
import { DUMMY_POST_DETAIL } from '@/data/dummyData';

const Content = () => {
  const { title, content, images, userInfo, createdDate, postType } =
    DUMMY_POST_DETAIL;

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

      <Box
        maxW={988}
        w={'calc(100% + 40px)'}
        m={{ mobile: '20px 0 20px -20px', tablet: '0 auto 0 auto' }}
      >
        <ImageSlider arrowStyle="circle" numberOfSlides={images.length}>
          {images.map((image) => (
            <Image src={image} alt="게시글 이미지" key={nanoid()} />
          ))}
        </ImageSlider>
      </Box>

      <Text
        lineHeight={'24px'}
        fontWeight={'medium'}
        mb={{ mobile: '28px', tablet: '50px' }}
      >
        {content}
      </Text>

      <Flex justify={'flex-end'}>
        <Text
          fontWeight={'medium'}
          color={'sub'}
          decoration={'underline'}
          textUnderlineOffset={'3px'}
          mb={'20px'}
          cursor={'pointer'}
          w={'fit-content'}
          onClick={() => alert('신고하기 버튼 클릭')}
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
