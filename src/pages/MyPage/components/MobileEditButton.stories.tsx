import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import MobileEditButton from './MobileEditButton';

const meta = {
  title: '/MyPage/components/MobileEditButton',
  component: MobileEditButton,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['click .btn'],
    },
    viewport: {
      defaultViewport: 'iphone13pro',
    },
  },
} satisfies Meta<typeof MobileEditButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    checkboxOpen: true,
    setCheckboxOpen: action('checkbox state changed'),
    handleDelete: () => {},
  },
  render: (args) => {
    const [checkboxOpen, setCheckboxOpen] = useState(false);

    return (
      <MobileEditButton
        checkboxOpen={checkboxOpen}
        setCheckboxOpen={setCheckboxOpen}
        handleDelete={args.handleDelete}
      />
    );
  },
};
