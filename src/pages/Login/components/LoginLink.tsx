import { As, Icon, Link, Text } from '@chakra-ui/react';

interface LoginLinkProps {
  type: 'kakao' | 'naver';
  icon?: As | undefined;
  img?: string;
  content: '카카오로 로그인하기' | '네이버로 로그인하기';
  link: string;
}

const LoginLink = ({ type, icon, content, link }: LoginLinkProps) => {
  return (
    <Link
      href={link}
      pos="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="56px"
      bgColor={type === 'kakao' ? '#FEE500' : '#2EC100'}
      borderRadius="10px"
      _hover={{}}
    >
      {type === 'kakao' && (
        <Icon
          as={icon}
          pos="absolute"
          left={{ mobile: '26px', tablet: '20px' }}
          w="24px"
          h="24px"
        />
      )}

      {type === 'naver' && (
        <Text
          pos="absolute"
          left={{ mobile: '26px', tablet: '20px' }}
          filter="white"
          fontSize="30px"
          color="white"
          fontWeight="900"
        >
          N
        </Text>
      )}

      <Text
        fontSize={{ mobile: '16px', tablet: '18px' }}
        fontWeight="regular"
        color={type === 'naver' ? 'white' : 'black'}
      >
        {content}
      </Text>
    </Link>
  );
};

export default LoginLink;
