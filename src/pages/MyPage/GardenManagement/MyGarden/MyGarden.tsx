import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { BottomMenu } from '@/components';
import { ThreeDotsMenuIcon } from '@/assets/icons';
import MenuButton from '../../components/MenuButton';

const MyGarden = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      w="100%"
      pl={{ mobile: '20px', tablet: '0' }}
      pr={{ mobile: '21px', tablet: '0' }}
    >
      <Box
        pt="13px"
        pb="19px"
        borderBottom="1px solid"
        borderColor="gray.100"
        mb="24px"
        display={{ mobile: 'none', tablet: 'block' }}
      >
        <Text fontSize="20px" fontWeight="semiBold">
          나의 텃밭
        </Text>
      </Box>

      <Flex
        border="1px solid"
        borderColor="gray.100"
        borderRadius={{ mobile: '10px', tablet: '20px' }}
        px="12px"
        py="18px"
        maxW="703px"
        align="center"
      >
        <Box
          h={{ mobile: '118px', tablet: '136px' }}
          w={{ mobile: '114px', tablet: '234px' }}
          minW={{ mobile: '114px', tablet: '234px' }}
          borderRadius={{ mobile: '8px', tablet: '12px' }}
          mr={{ mobile: '14px', tablet: '23px' }}
        >
          <Image
            w="full"
            h="full"
            objectFit="cover"
            borderRadius={{ mobile: '8px', tablet: '12px' }}
            src="https://cdn.jejusori.net/news/photo/202208/406575_410757_596.jpg"
          />
        </Box>

        <Flex
          w="full"
          pt={{ mobile: '0', tablet: '17px' }}
          pb={{ mobile: '0', tablet: '18px' }}
          pr={{ mobile: '0', tablet: '15px' }}
          flexDir="column"
        >
          <Flex
            align={{ mobile: 'flex-start', tablet: 'center' }}
            flexDir={{ mobile: 'column', tablet: 'row' }}
            mb={{ mobile: '0', tablet: '10px' }}
          >
            <Text
              fontSize={{ mobile: '16px', tablet: '18px' }}
              fontWeight="bold"
              color="black"
              noOfLines={1}
              mb={{ mobile: '4px' }}
              display={{ mobile: 'flex', tablet: 'inline' }}
              w={{ mobile: 'full', tablet: 'fit-content' }}
              isTruncated
            >
              사용기한이 7일 남았습니다.
              <Box
                as="button"
                ml="auto"
                display={{ mobile: 'flex', tablet: 'none' }}
                onClick={() => setIsOpen(true)}
              >
                <ThreeDotsMenuIcon />
              </Box>
              <BottomMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Box
                  as="button"
                  p="18px"
                  display="flex"
                  justifyContent="flex-start"
                  _hover={{ bg: 'green.100' }}
                  _first={{ borderTopRadius: 20, borderBottomRadius: 0 }}
                >
                  게시글 수정
                </Box>
                <Box
                  as="button"
                  p="18px"
                  display="flex"
                  justifyContent="flex-start"
                  _hover={{ bg: 'green.100' }}
                  _notFirst={{ borderRadius: 0 }}
                >
                  삭제하기
                </Box>
              </BottomMenu>
            </Text>
            <Text
              fontSize={{ mobile: '14px', tablet: '15px' }}
              fontWeight="regular"
              color="gray.700"
              noOfLines={1}
              mb={{ mobile: '4px' }}
            >
              {' '}
              (2023.12.01 - 2024.04.01)
            </Text>
            {/* pc 수정하기 버튼 */}
            <MenuButton ml="auto" />
          </Flex>
          <Flex
            fontSize={{ mobile: '16px', tablet: '18px' }}
            color="black"
            mb={{ mobile: '4px', tablet: '10px' }}
          >
            <Text fontWeight="regular" mr="16px">
              이름
            </Text>
            <Text fontWeight="semiBold">클라인 가르텐</Text>
          </Flex>
          <Flex
            fontSize={{ mobile: '16px', tablet: '18px' }}
            color="black"
            mb={{ mobile: '4px' }}
          >
            <Text mr="16px" fontWeight="regular">
              정보
            </Text>
            <Text mr="16px" fontWeight="semiBold">
              경기도・용인
            </Text>
            <Text fontWeight="semiBold">8평</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MyGarden;
