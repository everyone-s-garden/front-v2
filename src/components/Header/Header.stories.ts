import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import Header from './Header';

// BUG: chakra-ui가 적용되지 않는 문제
const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {};

export const LoggedOut: Story = {};
