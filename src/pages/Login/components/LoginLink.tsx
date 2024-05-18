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
      h={{ mobile: '60px', tablet: '80px' }}
      bgColor={type === 'kakao' ? '#FEE500' : '#2EC100'}
      borderRadius="20px"
      marginTop={{ mobile: '20px', tablet: '40px' }}
      _hover={{}}
    >
      {type === 'kakao' && (
        <Icon
          as={icon}
          pos="absolute"
          left="20px"
          w={{ mobile: '25px', tablet: '40px' }}
          h={{ mobile: '25px', tablet: '40px' }}
        />
      )}

      {type === 'naver' && (
        <Text
          pos="absolute"
          left={{ mobile: '24px', tablet: '27px' }}
          filter="white"
          fontSize={{ mobile: '25px', tablet: '40px' }}
          color="white"
          fontWeight="900"
        >
          N
        </Text>
      )}

      <Text
        fontSize={{ mobile: '14px', tablet: '26px' }}
        fontWeight="medium"
        color={type === 'naver' ? 'white' : 'black'}
      >
        {content}
      </Text>
    </Link>
  );
};

export default LoginLink;
