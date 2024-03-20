import { Meta, StoryFn } from '@storybook/react';
import TagComponent, { TagProps } from '.';

const meta: Meta<typeof TagComponent> = {
  title: 'Components/Tag',
  component: TagComponent,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<TagProps> = (args) => <TagComponent {...args} />;

export const FacilityTag = Template.bind({});
FacilityTag.args = {
  tagLabel: '화장실',
  variant: 'facility',
};

export const FaqProgressTag = Template.bind({});
FaqProgressTag.args = {
  tagLabel: '처리중',
  variant: 'faq',
  progress: true,
};

export const FaqTag = Template.bind({});
FaqTag.args = {
  tagLabel: '답변완료',
  variant: 'faq',
};

export const UserNameTag = Template.bind({});
UserNameTag.args = {
  tagLabel: '모두사용자',
  variant: 'userName',
};

export const PostStateTag = Template.bind({});
PostStateTag.args = {
  tagLabel: '모집완료',
  variant: 'postState',
};

export const PostStateWithIconTag = Template.bind({});
PostStateWithIconTag.args = {
  tagLabel: '모집중',
  variant: 'postState',
  icon: true,
};
export const WhisperTag = Template.bind({});
WhisperTag.args = {
  tagLabel: '텃밭 자랑',
  variant: 'whisper',
};
