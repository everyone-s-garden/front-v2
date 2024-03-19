import {
  Button,
  Flex,
  Grid,
  GridItem,
  Hide,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Show,
  Text,
} from '@chakra-ui/react';
import dayjs, { Dayjs } from 'dayjs';
import { useRef, useState } from 'react';
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons';

const days = ['일', '월', '화', '수', '목', '금', '토'];

interface DatePickerProps {
  placeholder?: string;
  onChange: (date: string) => void;
}

const DatePicker = ({
  placeholder = '사용 시작일',
  onChange,
}: DatePickerProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState<null | Dayjs>(null);

  const prevMonthDates = [];
  const currentMonthDates = [];
  const nextMonthDates = [];

  const daysInMonth = currentDate.daysInMonth();
  const firstDayOfMonth = dayjs(currentDate).startOf('month').locale('ko');
  const firstDayOfCalender = firstDayOfMonth.startOf('week');
  const lastDayOfMonth = dayjs(currentDate).endOf('month').locale('ko');
  const lastDayOfCalender = lastDayOfMonth.endOf('week');

  const diffPrevMonth = firstDayOfMonth.diff(firstDayOfCalender, 'day') - 1;
  const diffNextMonth = lastDayOfCalender.diff(lastDayOfMonth, 'day');

  for (let i = 0; i <= diffPrevMonth; i++) {
    const date = dayjs(firstDayOfCalender).add(i, 'day');
    prevMonthDates.push(date);
  }

  for (let i = 0; i < daysInMonth; i++) {
    const date = dayjs(firstDayOfMonth).add(i, 'day');
    currentMonthDates.push(date);
  }

  for (let i = 0; i < diffNextMonth; i++) {
    const date = dayjs(lastDayOfMonth).add(i + 1, 'day');
    nextMonthDates.push(date);
  }

  const getDateColor = (date: Dayjs) => {
    if (date.isSame(selectedDate, 'day')) {
      return 'orange.400';
    }
    if (date.isSame(dayjs(), 'day')) {
      return 'green.500';
    }

    return 'black';
  };

  const handlePrevMonthClick = () => {
    setCurrentDate(currentDate.subtract(1, 'month'));
  };

  const handleNextMonthClick = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };

  const handleDateClick = (date: Dayjs) => {
    if (!menuRef.current) return;

    menuRef.current.ariaExpanded = 'false';
    setSelectedDate(date);
    onChange(date.format('YYYY.MM.DD'));
  };

  return (
    <Menu>
      <MenuButton
        ref={menuRef}
        as={Button}
        rounded="10px"
        bg="gray.50"
        w={{ mobile: '123px', tablet: '275px' }}
        h={{ mobile: '67px', tablet: '40px' }}
        textAlign="left"
        py="11px"
        px={{ mobile: '13px', tablet: '16px' }}
        fontWeight="medium"
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
      <MenuList w="275px" px="25px" py="23px">
        <Flex justifyContent="space-between">
          <Text fontSize="18px" color="black" fontWeight="semiBold">
            {currentDate.format('YYYY MM월')}
          </Text>
          <Flex gap="41px">
            <IconButton
              onClick={handlePrevMonthClick}
              aria-label="Prev Month"
              bg="transparent"
              size="xs"
              fontSize="10px"
              icon={<ArrowLeftIcon width="16px" height="16px" />}
            />
            <IconButton
              onClick={handleNextMonthClick}
              aria-label="Next Month"
              bg="transparent"
              size="xs"
              fontSize="10px"
              icon={<ArrowRightIcon width="16px" height="16px" />}
            />
          </Flex>
        </Flex>
        <Grid
          templateColumns="repeat(7, 1fr)"
          rowGap="26px"
          columnGap="10px"
          textAlign="center"
          pt="20px"
        >
          {days.map((day) => (
            <Text key={day} fontSize="18px" color="black" fontWeight="semiBold">
              {day}
            </Text>
          ))}
          {prevMonthDates.map((date) => (
            <GridItem
              cursor="pointer"
              padding={0}
              key={date.format('YYYY-MM-DD')}
              fontSize="18px"
              color="gray.200"
              fontWeight="semiBold"
              onClick={handlePrevMonthClick}
            >
              {date.format('DD')}
            </GridItem>
          ))}
          {currentMonthDates.map((date) => (
            <GridItem
              cursor="pointer"
              padding={0}
              key={date.format('YYYY-MM-DD')}
              fontSize="18px"
              color={getDateColor(date)}
              fontWeight="semiBold"
              onClick={() => handleDateClick(date)}
            >
              {date.format('DD')}
            </GridItem>
          ))}
          {nextMonthDates.map((date) => (
            <GridItem
              cursor="pointer"
              padding={0}
              key={date.format('YYYY-MM-DD')}
              fontSize="18px"
              color="gray.200"
              fontWeight="semiBold"
              onClick={handleNextMonthClick}
            >
              {date.format('DD')}
            </GridItem>
          ))}
        </Grid>
      </MenuList>
    </Menu>
  );
};

export default DatePicker;
