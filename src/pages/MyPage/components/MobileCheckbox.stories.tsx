import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useState } from 'react';
import MobileCheckbox from './MobileCheckbox';

const meta = {
  title: '/MyPage/components/MobileCheckbox',
  component: MobileCheckbox,
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['click .btn'],
    },
    viewport: {
      defaultViewport: 'iphone13pro',
    },
  },
  argTypes: {
    handleCheckbox: {
      action: 'handleCheckbox',
    },
  },
} satisfies Meta<typeof MobileCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    checkedItems: {},
    handleCheckbox: action('Checkbox state changed false => true'),
    id: 1,
    checkboxOpen: false,
  },
  render: () => {
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
      1: false,
    });
    const handleCheckbox = (idx: number) => {
      setCheckedItems((prev) => ({
        ...prev,
        [idx]: !prev[idx],
      }));
    };

    return (
      <MobileCheckbox
        checkedItems={checkedItems}
        checkboxOpen
        id={1}
        handleCheckbox={handleCheckbox}
      />
    );
  },
};
