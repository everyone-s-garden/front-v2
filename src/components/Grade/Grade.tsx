import { Center, Flex, Icon, List, ListItem, Text } from '@chakra-ui/react';
import { Grade as GradeType } from '@/types/grade';
import { getFormattedUserGrade } from '@/utils/grade/getFormattedUserGrade';
import { getLargeGradeIcon } from '@/utils/grade/getLargeGardeIcon';

type GradeData = {
  grade: GradeType;
  description: string;
};

const gradeData: GradeData[] = [
  {
    grade: 'SEED',
    description: '회원 가입 시 씨앗 등급',
  },
  {
    grade: 'SPROUT',
    description: '댓글 5회, 글 1회 이상 시 새싹등급',
  },
  {
    grade: 'STEM',
    description: '댓글 10회, 글 5회 이상 시 가지등급',
  },
  {
    grade: 'FRUIT',
    description: '글 15회 이상, 거래 1회 이상 시 열매 등급',
  },
  {
    grade: 'HARVEST',
    description: '거래 5회 이상 시 수확 등급',
  },
  {
    grade: 'FARMER',
    description: '거래 10회 이상 시 농사꾼 등급',
  },
];

const Grade = () => {
  return (
    <Center flexDir={'column'}>
      <Text fontSize={{ mobile: '16px', tablet: '20px' }} fontWeight={'bold'}>
        모두의 텃밭 등급제도
      </Text>
      <List mt={{ mobile: '35px', tablet: '48px' }} maxW={'300px'} w={'100%'}>
        {gradeData.map(({ grade, description }) => (
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
            <Icon
              as={getLargeGradeIcon(grade)}
              w={{ mobile: '46px', desktop: '54px' }}
              h={{ mobile: '61px', desktop: '73px' }}
            />
            <Flex flexDir={'column'} gap={'4px'}>
              <Text
                fontWeight={'semiBold'}
                fontSize={{ mobile: '14px', tablet: '16px' }}
              >
                {getFormattedUserGrade(grade)}
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
