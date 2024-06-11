import type { Meta, StoryObj } from '@storybook/react';
import { CommentsIcon, ParagraphBoxIcon, PostBoxIcon } from '@/assets/icons';
import Empty from './Empty';

const meta = {
  title: 'components/Empty',
  component: Empty,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
  argTypes: {
    description: {
      control: 'text',
      description: '빈 값을 나타내는 아이콘 아래에 표시할 설명을 설정합니다.',
      defaultValue: `게시된 게시물이 없습니다.`,
    },
    size: {
      control: 'radio',
      description: '아이콘과 폰트 크기를 설정합니다.',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    src: {
      description: '빈 값을 나타내는 아이콘을 설정합니다.',
    },
    iconFill: {
      control: 'boolean',
      description: '아이콘을 채울지 여부를 설정합니다.',
      defaultValue: false,
    },
    iconStroke: {
      control: 'boolean',
      description: '아이콘 테두리를 표시할지 여부를 설정합니다.',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 게시글_없을_때: Story = {
  args: {
    size: 'large',
    src: PostBoxIcon,
    description: `등록된 글이 없습니다.
    새로운 글을 등록해보세요 !`,
  },
};

export const 댓글_없을_때: Story = {
  args: {
    size: 'medium',
    src: CommentsIcon,
    iconFill: true,
    description: `아직 댓글이 없습니다.
    댓글을 남겨보세요.`,
  },
};

export const 인기_게시글_없을_때: Story = {
  args: {
    size: 'medium',
    src: ParagraphBoxIcon,
    iconFill: true,
    description: `인기글이 없습니다.
    글을 작성하여 인기글이 되어보세요 !`,
  },
};

export const 모바일: Story = {
  args: {
    size: 'large',
    src: ParagraphBoxIcon,
    description: `등록된 글이 없습니다.
    새로운 글을 등록해보세요 !`,
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone13pro',
    },
  },
};
