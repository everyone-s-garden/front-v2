import {
  Button,
  Flex,
  Hide,
  Menu,
  MenuButton,
  MenuList,
  Show,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { ArrowDownIcon } from '@/assets/icons';
import DatePickerCalendar from './DatePickerCalendar';

interface DatePickerProps {
  placeholder?: string;
  onChange: (date: string) => void;
}

const DatePicker = ({
  placeholder = '사용 시작일',
  onChange,
}: DatePickerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState<null | Dayjs>(null);

  const handlePrevMonthClick = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNextMonthClick = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  const handleDateClick = (date: Dayjs) => {
    setSelectedDate(date);
    onChange(date.format('YYYY.MM.DD'));
    onClose();
  };

  const handleOpen = () => {
    onOpen();
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded="10px"
        bg="gray.50"
        w={{ mobile: '123px', tablet: '275px' }}
        h={{ mobile: '67px', tablet: '40px' }}
        textAlign="left"
        py="11px"
        px={{ mobile: '13px', tablet: '16px' }}
        fontWeight="medium"
        onClick={handleOpen}
        variant={'unstyled'}
        display={'flex'}
      >
        <Show above="tablet">
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="16px" color={selectedDate ? 'black' : 'gray.500'}>
              {selectedDate ? selectedDate.format('YYYY.MM.DD') : placeholder}
            </Text>
            <ArrowDownIcon />
          </Flex>
        </Show>
        <Hide above="tablet">
          <Flex direction="column" gap="10px">
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="14px" color="gray.500">
                {placeholder}
              </Text>
              <ArrowDownIcon />
            </Flex>
            <Text fontSize="16px" h="19px">
              {selectedDate && selectedDate.format('YYYY. MM. DD')}
            </Text>
          </Flex>
        </Hide>
      </MenuButton>
      <MenuList hideBelow="tablet" w="275px" px="34px" py="18px">
        <DatePickerCalendar
          currentDate={currentDate}
          selectedDate={selectedDate}
          handlePrevMonthClick={handlePrevMonthClick}
          handleNextMonthClick={handleNextMonthClick}
          handleDateClick={handleDateClick}
        />
      </MenuList>
      <Hide above="tablet">
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent w="283px" py="40px" px="35px">
            <DatePickerCalendar
              currentDate={currentDate}
              selectedDate={selectedDate}
              handlePrevMonthClick={handlePrevMonthClick}
              handleNextMonthClick={handleNextMonthClick}
              handleDateClick={handleDateClick}
            />
          </ModalContent>
        </Modal>
      </Hide>
    </Menu>
  );
};

export default DatePicker;
