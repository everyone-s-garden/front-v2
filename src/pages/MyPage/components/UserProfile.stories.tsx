import type { Meta, StoryObj } from '@storybook/react';
import UserProfile from './UserProfile';

const meta = {
  title: '/MyPage/components/UserProfile',
  component: UserProfile,
  tags: ['autodocs'],
} satisfies Meta<typeof UserProfile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 유저정보창: Story = {};
