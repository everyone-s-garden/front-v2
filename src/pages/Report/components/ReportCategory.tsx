import {
  Box,
  Flex,
  FormLabel,
  Hide,
  Icon,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useController, useFormContext, useWatch } from 'react-hook-form';
import {
  BottomMenu,
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownTrigger,
} from '@/components';
import { ArrowDownIcon } from '@/assets/icons';
import { REPORT_DATA } from '../constants';
import { Report } from '../schema';
import { Color, Name } from '../types';

interface ReportCategoryProps {
  categoryList: string[];
  name: Name;
  color: Color;
}

const ReportCategory = ({ color, name, categoryList }: ReportCategoryProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Report>();
  const { field } = useController({
    name: 'reportType',
    control,
  });

  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleClick = (category: string) => {
    field.onChange(category);
    onClose();
  };

  const { report } = REPORT_DATA[name];
  const categoryName = useWatch({ control, name: 'reportType' });

  return (
    <Box>
      <FormLabel htmlFor="category" mb={{ mobile: '14px', tablet: '20px' }}>
        상세 유형 선택
      </FormLabel>
      <Hide below="tablet">
        <Dropdown colorScheme={color} variant={'none'}>
          <DropdownTrigger
            type={'button'}
            border={'1px solid'}
            borderColor={errors?.reportType?.message ? 'error' : 'gray.200'}
            borderRadius={'10px'}
            h={'53px'}
            px={'20px'}
            w={'100%'}
          >
            <Flex justify={'space-between'} align={'center'}>
              <Text>
                {categoryName
                  ? report[categoryName as keyof typeof report]
                  : '상세 유형을 선택해주세요.'}
              </Text>
              <Icon
                as={ArrowDownIcon}
                w={'20px'}
                h={'20px'}
                stroke={'gray.400'}
              />
            </Flex>
          </DropdownTrigger>

          <DropdownList minW={'606px'}>
            {categoryList.map((category, index) => (
              <DropdownItem
                key={index}
                h={'54px'}
                w={'100%'}
                onClick={() => handleClick(category)}
              >
                {report[category as keyof typeof report]}
              </DropdownItem>
            ))}
          </DropdownList>
        </Dropdown>
      </Hide>

      <Hide above="tablet">
        <Flex
          justify={'space-between'}
          align={'center'}
          onClick={onOpen}
          border={'1px solid'}
          borderColor={errors?.reportType?.message ? 'error' : 'gray.200'}
          borderRadius={'10px'}
          h={'53px'}
          px={{ mobile: '16px', tablet: '24px' }}
          w={'100%'}
          cursor={'pointer'}
        >
          <Text>
            {categoryName
              ? report[categoryName as keyof typeof report]
              : '상세 유형을 선택해주세요.'}
          </Text>
          <Icon as={ArrowDownIcon} w={'20px'} h={'20px'} stroke={'gray.400'} />
        </Flex>
        <BottomMenu isOpen={isOpen} onClose={onClose}>
          {categoryList.map((category, index) => (
            <Flex
              _first={{ borderTopRadius: 20, borderBottomRadius: 0 }}
              _notFirst={{ borderRadius: 0 }}
              _hover={{ bg: `${color}.100` }}
              key={index}
              onClick={() => handleClick(category)}
              p="18px"
              cursor={'pointer'}
            >
              {report[category as keyof typeof report]}
            </Flex>
          ))}
        </BottomMenu>
      </Hide>
    </Box>
  );
};

export default ReportCategory;
