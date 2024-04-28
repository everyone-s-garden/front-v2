import type { Meta, StoryObj } from '@storybook/react';
import { List } from '@chakra-ui/react';
import { whisperMockData } from '../mockData';
import WhisperItem from './WhisperItem';

const meta = {
  title: '/MyPage/components/WhisperItem',
  component: WhisperItem,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  argTypes: {},
} satisfies Meta<typeof WhisperItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 속닥속닥_카드_기본: Story = {
  args: {
    item: whisperMockData[0],
    idx: 0,
  },

  render: (args) => (
    <List>
      <WhisperItem {...args} />
    </List>
  ),
};
export const 속닥속닥_카드_기본_모바일: Story = {
  args: {
    item: whisperMockData[0],
    idx: 0,
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone13pro',
    },
  },
  render: (args) => (
    <List>
      <WhisperItem {...args} />
    </List>
  ),
};
export const 속닥속닥_메뉴: Story = {
  args: {
    item: whisperMockData[0],
    menu: true,
    idx: 0,
  },

  render: (args) => (
    <List>
      <WhisperItem {...args} />
    </List>
  ),
};
export const 속닥속닥_메뉴_모바일: Story = {
  args: {
    item: whisperMockData[0],
    menu: true,
    idx: 0,
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone13pro',
    },
  },
  render: (args) => (
    <List>
      <WhisperItem {...args} />
    </List>
  ),
};
