import { Center, Flex, Image, List, ListItem, Text } from '@chakra-ui/react';
import { Farmer, Fruit, Harvest, Seed, Sprout, Stem } from '@/assets/images';

const gradeData = [
  {
    image: Seed,
    grade: '씨앗 등급',
    color: '#FF9029',
    description: '회원 가입 시 씨앗 등급',
  },
  {
    image: Sprout,
    grade: '새싹 등급',
    color: '#296512',
    description: '댓글 5회, 글 1회 이상 시 새싹등급',
  },
  {
    image: Stem,
    grade: '가지 등급',
    color: '#83A834',
    description: '댓글 10회, 글 5회 이상 시 가지등급',
  },
  {
    image: Fruit,
    grade: '열매 등급',
    color: '#F6C857',
    description: '글 15회 이상, 거래 1회 이상 시 열매 등급',
  },
  {
    image: Harvest,
    grade: '수확 등급',
    color: '#C15201',
    description: '거래 5회 이상 시 수확 등급',
  },
  {
    image: Farmer,
    grade: '농사꾼 등급',
    color: 'black',
    description: '거래 10회 이상 시 농사꾼 등급',
  },
];

const Grade = () => {
  return (
    <Center flexDir={'column'}>
      <Text fontSize={{ mobile: '16px', tablet: '20px' }} fontWeight={'bold'}>
        모두의 텃밭 등급제도
      </Text>
      <List mt={'48px'} maxW={'300px'} w={'100%'}>
        {gradeData.map(({ image, grade, description, color }) => (
          <ListItem
            key={grade}
            display={'flex'}
            py={'20px'}
            _first={{ pt: 0 }}
            gap={'18px'}
            alignItems={'center'}
            borderBottom={'1px solid'}
            borderBottomColor={'gray.100'}
          >
            <Image
              src={image}
              alt={grade}
              h={{ mobile: '44px', tablet: '56px' }}
            />
            <Flex flexDir={'column'} gap={'4px'}>
              <Text
                color={color}
                fontWeight={'semiBold'}
                fontSize={{ mobile: '14px', tablet: '16px' }}
              >
                {grade}
              </Text>
              <Text
                fontSize={{ mobile: '12px', tablet: '14px' }}
                fontWeight={'medium'}
                color={'sub'}
              >
                {description}
              </Text>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Center>
  );
};

export default Grade;
