import { Box, Flex, Img, Text } from '@chakra-ui/react';

import { FooterImage } from '@/assets/images/footer';

const MobileFooter = () => {
  const footerArr = [
    '내 주변 분양',
    '속닥속닥',
    '채팅',
    '로그인 / 회원가입',
    '글쓰기',
    '유저의 소리함',
  ];

  return (
    <Box py={'80px'} px={'40px'}>
      <Img src={FooterImage} h={'25px'} />
      <Text mt={'22px'}>사업자 등록번호: 595-64-00704 | 대표: 박진겸</Text>
      <Flex flexDir={'column'} mt={'114px'} gap={'20px'}>
        {footerArr.map((el) => (
          <Text key={el}>{el}</Text>
        ))}
      </Flex>
    </Box>
  );
};

export default MobileFooter;
