import type { Meta, StoryObj } from '@storybook/react';
import DatePicker from './DatePicker';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    onChange: () => {},
  },
  render: (args) => <DatePicker {...args} />,
};
