import {
  Box,
  Flex,
  FormLabel,
  Hide,
  Icon,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import {
  BottomMenu,
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownTrigger,
} from '@/components';
import { ArrowDownIcon } from '@/assets/icons';

const ReportCategory = () => {
  return (
    <Box>
      <FormLabel htmlFor="category" mb={{ mobile: '14px', tablet: '20px' }}>
        상세 유형 선택
      </FormLabel>
      <Hide below="tablet">
        <Dropdown>
          <DropdownTrigger
            type={'button'}
            border={'1px solid'}
            borderColor={'gray.200'}
            borderRadius={'10px'}
            h={'53px'}
            px={'24px'}
            w={'100%'}
          >
            <Flex justify={'space-between'} align={'center'}>
              <Text>상세 유형을 선택해주세요.</Text>
              <Icon
                as={ArrowDownIcon}
                w={'20px'}
                h={'20px'}
                stroke={'gray.400'}
              />
            </Flex>
          </DropdownTrigger>

          <DropdownList minW={'606px'}>
            <DropdownItem h={'54px'} w={'100%'}>
              아이템 1
            </DropdownItem>
            <DropdownItem h={'54px'}>아이템 1</DropdownItem>
            <DropdownItem h={'54px'}>아이템 1</DropdownItem>
            <DropdownItem h={'54px'}>아이템 1</DropdownItem>
          </DropdownList>
        </Dropdown>
      </Hide>

      <Hide above="tablet">
        <MobileReportBottomMenu />
      </Hide>
    </Box>
  );
};

const MobileReportBottomMenu = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Flex
        justify={'space-between'}
        align={'center'}
        onClick={onOpen}
        border={'1px solid'}
        borderColor={'gray.200'}
        borderRadius={'10px'}
        h={'53px'}
        px={'24px'}
        w={'100%'}
        cursor={'pointer'}
      >
        <Text>상세 유형을 선택해주세요.</Text>
        <Icon as={ArrowDownIcon} w={'20px'} h={'20px'} stroke={'gray.400'} />
      </Flex>
      <BottomMenu isOpen={isOpen} onClose={onClose}>
        <Flex
          _first={{ borderTopRadius: 20, borderBottomRadius: 0 }}
          _notFirst={{ borderRadius: 0 }}
          _hover={{ bg: 'green.100' }}
          onClick={onClose}
          p="18px"
          cursor={'pointer'}
        >
          아이템 1
        </Flex>
        <Flex
          _first={{ borderTopRadius: 20, borderBottomRadius: 0 }}
          _notFirst={{ borderRadius: 0 }}
          _hover={{ bg: 'green.100' }}
          onClick={onClose}
          p="18px"
          cursor={'pointer'}
        >
          아이템 1
        </Flex>
        <Flex
          _first={{ borderTopRadius: 20, borderBottomRadius: 0 }}
          _notFirst={{ borderRadius: 0 }}
          _hover={{ bg: 'green.100' }}
          onClick={onClose}
          p="18px"
          cursor={'pointer'}
        >
          아이템 1
        </Flex>
        <Flex
          _first={{ borderTopRadius: 20, borderBottomRadius: 0 }}
          _notFirst={{ borderRadius: 0 }}
          _hover={{ bg: 'green.100' }}
          onClick={onClose}
          p="18px"
          cursor={'pointer'}
        >
          아이템 1
        </Flex>
      </BottomMenu>
    </>
  );
};

export default ReportCategory;
