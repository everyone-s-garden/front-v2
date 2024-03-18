import { Meta, StoryFn } from '@storybook/react';
import AvatarComponent, { AvatarComponentProps } from './index';

// `satisfies` 사용 대신 Meta<typeof AvatarComponent> 직접 사용
const meta: Meta<typeof AvatarComponent> = {
  title: 'Components/Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<AvatarComponentProps> = (args) => (
  <AvatarComponent {...args} />
);

export const AvatarStory = Template.bind({});
