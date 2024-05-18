import { Flex, Text } from '@chakra-ui/react';
import { AvatarComponent } from '@/components';
import { GRADE } from '../../constants';
import { User } from '../../types';

const AuthorInfo = ({ userId, profile, name, memberMannerGrade }: User) => {
  const handleClickUser = () => {
    userId;
    alert(`준비 중인 기능입니다.`);
  };

  const handleClickGrade = () => {
    alert('준비 중인 기능입니다.');
  };

  return (
    <Flex
      justify={'space-between'}
      px={{ mobile: '20px', tablet: '0' }}
      py={'14px'}
    >
      <Flex gap={'8px'} align={'center'}>
        <AvatarComponent
          src={profile ?? ''}
          w={'52px'}
          h={'52px'}
          onClick={handleClickUser}
          cursor={'pointer'}
        />
        <Flex
          flexDir={'column'}
          justify={'space-between'}
          gap={'4px'}
          onClick={handleClickUser}
          cursor={'pointer'}
        >
          <Text
            fontSize={'18px'}
            fontWeight={{ mobile: 'semiBold', tablet: 'bold' }}
          >
            {name}
          </Text>
          <Text
            fontSize={'14px'}
            color={'sub'}
            fontWeight={{ mobile: 'medium', tablet: 'semiBold' }}
          >
            텃밭 보러 가기
          </Text>
        </Flex>
      </Flex>

      <Flex flexDir={'column'} gap={'6px'} alignItems={'end'}>
        <Text fontSize={'14px'} fontWeight={'semiBold'}>
          {GRADE.TYPE[memberMannerGrade]}
        </Text>
        <Text
          fontSize={'14px'}
          fontWeight={'medium'}
          color={'sub'}
          decoration={'underline'}
          textUnderlineOffset={'3px'}
          cursor={'pointer'}
          onClick={handleClickGrade}
        >
          등급 안내
        </Text>
      </Flex>
    </Flex>
  );
};

export default AuthorInfo;
