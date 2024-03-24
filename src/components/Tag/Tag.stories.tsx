import { Meta, StoryObj } from '@storybook/react';
import TagComponent, { TagProps } from '.';

const meta: Meta<typeof TagComponent> = {
  title: 'Components/Tag',
  component: TagComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FacilityTag: Story = {
  args: {
    tagLabel: '화장실',
    variant: 'facility',
  },
};
export const FaqProgressTag: Story = {
  args: {
    tagLabel: '처리중',
    variant: 'faq',
    progress: true,
  },
};
export const FaqTag: Story = {
  args: {
    tagLabel: '답변완료',
    variant: 'faq',
  },
};
export const UserNameTag: Story = {
  args: {
    tagLabel: '모두사용자',
    variant: 'userName',
  },
};
export const PostStateTag: Story = {
  args: {
    tagLabel: '모집완료',
    variant: 'postState',
  },
};
export const PostStateWithIconTag: Story = {
  args: {
    tagLabel: '모집중',
    variant: 'postState',
    icon: true,
  },
};
export const WhisperTag: Story = {
  args: {
    tagLabel: '텃밭 자랑',
    variant: 'whisper',
  },
};
