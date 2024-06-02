import { Box, Button, Flex, List, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { CloseSecondaryIcon, LocationPrimaryIcon } from '@/assets/icons';

const itemList = [
  {
    id: 1,
    text: '서울특별시 강남구 역삼1동',
  },
  {
    id: 2,
    text: '경기도 고양시 덕양구 행신동',
  },
  {
    id: 3,
    text: '경기도 용인시 처인구 역삼동',
  },
];

const ItemButton = ({ children }: { children: ReactNode }) => {
  return (
    <Flex align="center">
      <Box
        bg="gray.700"
        p="4.17px"
        borderRadius="99px"
        mr="12px"
        h="fit-content"
      >
        <CloseSecondaryIcon />
      </Box>

      <Button w="full" bg="green.100" h="48px" _hover={{ bg: 'green.100' }}>
        <Text
          ml="8px"
          color="green.500"
          fontWeight="semiBold"
          fontSize={{ mobile: '14px', tablet: '16px' }}
        >
          {children}
        </Text>
      </Button>
    </Flex>
  );
};

const VerifyLocation = () => {
  return (
    <Box
      ml={{ mobile: '0px', tablet: '98px' }}
      maxW="490px"
      px={{ mobile: '20px', tablet: '0px' }}
      mt={{ mobile: '30px', tablet: '0px' }}
      w="100%"
    >
      <Text
        fontSize="18px"
        fontWeight="semiBold"
        mb={{ mobile: '16px', tablet: '18px' }}
      >
        지역 인증하기
      </Text>
      <Button
        w="100%"
        h="56px"
        bg="green.100"
        mb={{ mobile: '40px', tablet: '80px' }}
        _hover={{ bg: 'green.100' }}
      >
        <LocationPrimaryIcon />
        <Text
          ml="8px"
          color="green.500"
          fontWeight="semiBold"
          fontSize={{ mobile: '16px', tablet: '18px' }}
        >
          내 지역 인증하기
        </Text>
      </Button>
      <Flex
        align={{ mobile: 'flex-start', tablet: 'center' }}
        mb="16px"
        flexDir={{ mobile: 'column', tablet: 'row' }}
      >
        <Text color="black" fontSize="18px" fontWeight="semiBold" mr="10px">
          선택된 지역
        </Text>
        <Text color="gray.700" fontSize="16px" fontWeight="medium">
          최대 3개까지 지정 가능합니다.
        </Text>
      </Flex>
      <Box
        border="1px solid"
        borderColor="gray.100"
        py={{ mobile: '16px', tablet: '29px' }}
        pl={{ mobile: '13px', tablet: '18px' }}
        pr={{ mobile: '14px', tablet: '17px' }}
        borderRadius="10px"
        minW={{ mobile: '350px', tablet: '490px' }}
        minH={{ mobile: '196px', tablet: '222px' }}
        w="100%"
      >
        <List spacing="10px">
          {itemList?.map((item) => (
            <ItemButton key={item.id}>{item.text}</ItemButton>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default VerifyLocation;
