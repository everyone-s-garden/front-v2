import {
  Flex,
  Grid,
  GridItem,
  IconButton,
  MenuItem,
  Text,
} from '@chakra-ui/react';
import dayjs, { Dayjs } from 'dayjs';
import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons';

interface DatePickerCalendarProps {
  currentDate: Dayjs;
  selectedDate: Dayjs | null;
  handlePrevMonthClick: () => void;
  handleNextMonthClick: () => void;
  handleDateClick: (date: Dayjs) => void;
}

const days = ['일', '월', '화', '수', '목', '금', '토'];

const DatePickerCalendar = ({
  currentDate,
  selectedDate,
  handleNextMonthClick,
  handlePrevMonthClick,
  handleDateClick,
}: DatePickerCalendarProps) => {
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

  return (
    <>
      <Flex justifyContent="space-between">
        <Text fontSize="16px" color="black" fontWeight="semiBold">
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
        columnGap={{ mobile: '11px', tablet: '10px' }}
        textAlign="center"
        pt="20px"
      >
        {days.map((day) => (
          <Text key={day} fontSize="16px" color="black" fontWeight="semiBold">
            {day}
          </Text>
        ))}
        {prevMonthDates.map((date) => (
          <GridItem padding={0} key={date.format('YYYY-MM-DD')} />
        ))}
        {currentMonthDates.map((date) => (
          <GridItem
            cursor="pointer"
            p="0"
            key={date.format('YYYY-MM-DD')}
            onClick={() => handleDateClick(date)}
          >
            <MenuItem
              p="0"
              w="100%"
              fontSize="16px"
              _hover={{}}
              textAlign="center"
              justifyContent="center"
              color={date.isSame(selectedDate, 'day') ? 'green.500' : 'black'}
              fontWeight="semiBold"
            >
              {date.format('D')}
            </MenuItem>
          </GridItem>
        ))}
        {nextMonthDates.map((date) => (
          <GridItem padding={0} key={date.format('YYYY-MM-DD')} />
        ))}
      </Grid>
    </>
  );
};

export default DatePickerCalendar;
