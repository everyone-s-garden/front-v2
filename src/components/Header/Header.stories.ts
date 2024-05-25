import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

// BUG: chakra-ui가 적용되지 않는 문제
const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    loggedIn: true,
  },
};

export const LoggedOut: Story = {
  args: {
    loggedIn: false,
  },
};
