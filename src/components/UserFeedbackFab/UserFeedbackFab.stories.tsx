import type { Meta, StoryObj } from '@storybook/react';
import UserFeedbackFab from './UserFeedbackFab';

const meta = {
  title: 'Components/UserFeedbackFab',
  component: UserFeedbackFab,
  tags: ['autodocs'],
} satisfies Meta<typeof UserFeedbackFab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본: Story = {};
export const 모바일: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone13pro',
    },
  },
};
