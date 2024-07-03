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

const args = {
  item: gardenMockData[0],
  idx: 0,
};

export const 텃밭카드_기본: Story = {
  args,
  render: (args) => (
    <List>
      <GardenItem {...args} />
    </List>
  ),
};
export const 텃밭카드_기본_모바일: Story = {
  args,
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
  args: { ...args, heart: true },
  render: (args) => (
    <List>
      <GardenItem {...args} />
    </List>
  ),
};
export const 텃밭카드_하트_모바일: Story = {
  args: { ...args, heart: true },
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
  args: { ...args, menu: true },
  render: (args) => (
    <List>
      <GardenItem {...args} />
    </List>
  ),
};
export const 텃밭카드_메뉴_모바일: Story = {
  args: { ...args, menu: true },
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
