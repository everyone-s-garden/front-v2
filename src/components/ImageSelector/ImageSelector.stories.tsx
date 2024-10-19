import type { Meta, StoryObj } from '@storybook/react';
import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { ImageSelector } from '..';

const meta = {
  title: 'Components/ImageSelector',
  component: ImageSelector,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  argTypes: {},
} satisfies Meta<typeof ImageSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    breakPoints: {
      320: { slidesPerView: 1.5, spaceBetween: 12 },
      480: { slidesPerView: 2.5, spaceBetween: 12 },
      768: { slidesPerView: 4.5, spaceBetween: 12 },
      1024: { slidesPerView: 6, spaceBetween: 14 },
    },
    size: { mobile: 100, tablet: 136, desktop: 136 },
  },
  argTypes: {
    breakPoints: {
      control: 'object',
      description: '반응형 브레이크포인트를 설정합니다.',
    },
    size: {
      control: 'object',
      description: '이미지 크기를 설정합니다.',
    },
  },
};

export const 길이_제한: Story = {
  args: {
    breakPoints: {
      320: { slidesPerView: 1.5, spaceBetween: 12 },
      480: { slidesPerView: 2.5, spaceBetween: 12 },
      768: { slidesPerView: 4.5, spaceBetween: 12 },
      1024: { slidesPerView: 6, spaceBetween: 14 },
    },
    size: { mobile: 100, tablet: 136, desktop: 136 },
  },
  render: (args) => {
    const [width, setWidth] = useState(400);

    return (
      <>
        <Box border={'1px solid black'} w={`${width}px`} mb={4}>
          <ImageSelector {...args} />
        </Box>
        <Button onClick={() => setWidth((prev) => prev + 100)} mr={4}>
          너비 +100 늘리기
        </Button>
        <Button onClick={() => setWidth((prev) => prev - 100)}>
          너비 -100 줄이기
        </Button>
      </>
    );
  },
};
