import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import PostList from './PostList';
import { DUMMY_POST } from '@/data/dummyData';

const meta = {
  title: 'components/PostList',
  component: PostList,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  argTypes: {},
} satisfies Meta<typeof PostList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: { posts: DUMMY_POST },
  render: (args) => (
    <Box px={100}>
      <PostList {...args} />
    </Box>
  ),
};

export const 모바일: Story = {
  args: { posts: DUMMY_POST },
  parameters: {
    viewport: {
      defaultViewport: 'iphone13pro',
    },
  },
};
