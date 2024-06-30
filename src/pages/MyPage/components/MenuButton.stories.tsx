import type { Meta, StoryObj } from '@storybook/react';
import MenuButton from './MenuButton';

const meta = {
  title: '/MyPage/components/MenuButton',
  component: MenuButton,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  argTypes: {},
} satisfies Meta<typeof MenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    ml: '24px',
    itemId: 1,
  },
  render: (args) => <MenuButton {...args} />,
};
