import type { Meta, StoryObj } from '@storybook/react';
import {
  Box,
  Button,
  Center,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { BottomMenu } from '..';

const meta = {
  title: 'Components/BottomMenu',
  component: BottomMenu,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
  argTypes: {},
} satisfies Meta<typeof BottomMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: { isOpen: false, onClose: () => {}, children: null },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '메뉴의 열림/닫힘 상태를 설정합니다.',
      defaultValue: true,
    },
    onClose: {
      action: 'onClose',
      description: '메뉴를 닫을 때 실행될 함수를 설정합니다.',
    },
  },
  render: ({ isOpen }) => {
    const { isOpen: open, onClose, onOpen } = useDisclosure();

    return (
      <>
        <Button onClick={onOpen}>버튼</Button>
        <BottomMenu isOpen={isOpen || open} onClose={onClose}>
          <Box p={4}>하단 메뉴</Box>
        </BottomMenu>
      </>
    );
  },
};

export const 정렬: Story = {
  args: { isOpen: false, onClose: () => {}, children: null },
  render: () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const menuData = ['댓글순', '최근 날짜순', '오래된 날짜순', '좋아요 순'];

    return (
      <>
        <Button onClick={onOpen}>정렬</Button>
        <BottomMenu isOpen={isOpen} onClose={onClose}>
          {menuData.map((item) => (
            <Center
              as={Button}
              variant="unstyled"
              key={item}
              _first={{ borderTopRadius: 20, borderBottomRadius: 0 }}
              _notFirst={{ borderRadius: 0 }}
              _hover={{ bg: 'orange.100' }}
              onClick={onClose}
              py="20px"
            >
              {item}
            </Center>
          ))}
        </BottomMenu>
      </>
    );
  },
};

export const 범위: Story = {
  args: { isOpen: false, onClose: () => {}, children: null },
  render: () => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
      <>
        <Button onClick={onOpen}>가격 필터</Button>
        <BottomMenu isOpen={isOpen} onClose={onClose}>
          <Box p="30px" h={224}>
            <Text size="18px" fontWeight="semiBold" mb="52px">
              가격
            </Text>
            <Center>
              <RangeSlider
                defaultValue={[0, 5, 10]}
                min={0}
                max={10}
                step={5}
                mx="auto"
              >
                <RangeSliderTrack bg="green.200">
                  <RangeSliderFilledTrack bg="green.600" />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={2} />
              </RangeSlider>
            </Center>
          </Box>
        </BottomMenu>
      </>
    );
  },
};
