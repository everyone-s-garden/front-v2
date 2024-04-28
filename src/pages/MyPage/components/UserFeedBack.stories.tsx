import type { Meta, StoryObj } from '@storybook/react';
import UserFeedBack from './UserFeedBack';

const meta = {
  title: '/MyPage/components/UserFeedBack',
  component: UserFeedBack,
  tags: ['autodocs'],
} satisfies Meta<typeof UserFeedBack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 유저의소리함: Story = {};
