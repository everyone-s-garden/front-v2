import { Center, Flex, Icon, Text, useDisclosure } from '@chakra-ui/react';
import { AvatarComponent, Modal } from '@/components';
import { ClosePrimaryIcon } from '@/assets/icons';
import { GRADE } from '../../constants';
import { User } from '../../types';
import Grade from '@/components/Grade/Grade';

const AuthorInfo = ({ userId, profile, name, memberMannerGrade }: User) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClickUser = () => {
    userId;
    alert(`준비 중인 기능입니다.`);
  };

  return (
    <>
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
            onClick={onOpen}
          >
            등급 안내
          </Text>
        </Flex>
      </Flex>
      <Modal
        showButton={false}
        showExitIcon={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <Flex justify={'flex-end'} p={'23px'}>
          <Icon
            as={ClosePrimaryIcon}
            w={'28px'}
            h={'28px'}
            fill={'gray.400'}
            onClick={onClose}
            cursor={'pointer'}
          />
        </Flex>
        <Center
          px={{ mobile: '20px', tablet: '80px' }}
          pb={'60px'}
          w={{ mobile: 'calc(100vw - 40px)', tablet: 'auto' }}
        >
          <Grade />
        </Center>
      </Modal>
    </>
  );
};

export default AuthorInfo;
