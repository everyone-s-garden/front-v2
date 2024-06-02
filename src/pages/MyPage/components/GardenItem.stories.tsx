import type { Meta, StoryObj } from '@storybook/react';
import { List } from '@chakra-ui/react';
import { gardenMockData } from '../mockData';
import GardenItem from './GardenItem';

const meta = {
  title: '/MyPage/components/GardenItem',
  component: GardenItem,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  argTypes: {},
} satisfies Meta<typeof GardenItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 텃밭카드_기본: Story = {
  args: {
    item: gardenMockData[0],
    idx: 0,
  },
  render: (args) => (
    <List>
      <GardenItem {...args} />
    </List>
  ),
};
export const 텃밭카드_기본_모바일: Story = {
  args: {
    item: gardenMockData[0],
    idx: 0,
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone13pro',
    },
  },
  render: (args) => (
    <List>
      <GardenItem {...args} />
    </List>
  ),
};

export const 텃밭카드_하트: Story = {
  args: {
    heart: true,
    item: gardenMockData[0],
    idx: 0,
  },
  render: (args) => (
    <List>
      <GardenItem {...args} />
    </List>
  ),
};
export const 텃밭카드_하트_모바일: Story = {
  args: {
    heart: true,
    item: gardenMockData[0],
    idx: 0,
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone13pro',
    },
  },
  render: (args) => (
    <List>
      <GardenItem {...args} />
    </List>
  ),
};

export const 텃밭카드_메뉴: Story = {
  args: {
    menu: true,
    item: gardenMockData[0],
    idx: 0,
  },
  render: (args) => (
    <List>
      <GardenItem {...args} />
    </List>
  ),
};
export const 텃밭카드_메뉴_모바일: Story = {
  args: {
    menu: true,
    item: gardenMockData[0],
    idx: 0,
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone13pro',
    },
  },
  render: (args) => (
    <List>
      <GardenItem {...args} />
    </List>
  ),
};
