import { Meta, StoryObj } from '@storybook/react';
import AvatarComponent from './Avatar';

const meta = {
  title: 'Components/Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof AvatarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  argTypes: {
    src: {
      description: '이미지 url을 입력합니다.',
      control: 'radio',
      options: [
        'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66f604e7b0e6900f9ac53a43965300eb9a',
        'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625',
        'https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e669f5287469802eca457586a25a096fd31',
      ],
      name: '이미지 url',
    },
  },
};
