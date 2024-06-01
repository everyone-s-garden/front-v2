import type { Meta, StoryObj } from '@storybook/react';
import Grade from './Grade';

const meta = {
  title: 'components/Grade',
  component: Grade,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  argTypes: {},
} satisfies Meta<typeof Grade>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {},
  argTypes: {},
};
