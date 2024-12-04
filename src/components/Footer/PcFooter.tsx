import { Box, Flex, Grid, Img, Text } from '@chakra-ui/react';

import { FooterImage } from '@/assets/images/footer';

const PcFooter = () => {
  const footerArr = [
    '내 주변 분양',
    '로그인 / 회원가입',
    '속닥속닥',
    '글쓰기',
    '채팅',
    '유저의 소리함',
  ];

  return (
    <Box maxW="1194px" px={'20px'} mx={'auto'} h={'248px'}>
      <Flex justifyContent={'space-between'} h={'100%'} alignItems={'center'}>
        <Box>
          <Img src={FooterImage} h={'25px'} />
          <Text mt={'22px'}>사업자 등록번호: 595-64-00704 | 대표: 박진겸</Text>
        </Box>
        <Grid
          gridTemplateColumns={'1fr 1fr'}
          gridRowGap="18px"
          gridColumnGap="46px"
        >
          {footerArr.map((el) => (
            <Text key={el}>{el}</Text>
          ))}
        </Grid>
      </Flex>
    </Box>
  );
};

export default PcFooter;
