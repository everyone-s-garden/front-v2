import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react';
import { DefaultProfile } from '@/assets/images';
import { OtherUserInfo } from '@/services/user/user';
import { getLargeGradeIcon } from '@/utils/grade/getLargeGardeIcon';

interface TabletAndPCProfileProps {
  userInfo: OtherUserInfo;
}

const TabletAndPCProfile = ({ userInfo }: TabletAndPCProfileProps) => {
  const UserGrade = getLargeGradeIcon(userInfo.memberMannerGrade);

  return (
    <Flex w="full" h="full" justifyContent={'space-between'} flexDir={'column'}>
      <Flex flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
        <Icon
          as={UserGrade}
          w={{ tablet: '62px', desktop: '76px' }}
          h={{ tablet: '84px', desktop: '102px' }}
        />
        <Text
          fontSize={{ tablet: '14px', desktop: '16px' }}
          fontWeight={'semiBold'}
        >
          {userInfo?.memberMannerGrade}
        </Text>
      </Flex>

      <Flex gap={'8px'} mt={'auto'} alignItems={'center'}>
        <Image
          src={
            userInfo?.profileImageUrl
              ? userInfo?.profileImageUrl
              : DefaultProfile
          }
          alt={userInfo?.nickname}
          w={{ tablet: '28px', desktop: '44px' }}
          h={{ tablet: '28px', desktop: '44px' }}
          borderRadius="50%"
        />

        <Box>
          <Text
            w={'fit-content'}
            px={'12px'}
            borderRadius={'full'}
            bgColor={'black'}
            color={'white'}
            fontSize={{ tablet: '12px', desktop: '14px' }}
            fontWeight={'semiBold'}
          >
            {userInfo?.nickname}
          </Text>
          <Text
            mt={'6px'}
            maxW={{ tablet: '92px' }}
            sx={{ textWrap: 'noWrap' }}
            fontSize={{ tablet: '8px', desktop: '10px' }}
            color={'gray.500'}
            textOverflow={'ellipsis'}
            overflow={'hidden'}
          >
            {userInfo?.email}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default TabletAndPCProfile;
