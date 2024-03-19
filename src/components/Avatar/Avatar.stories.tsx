import { Meta, StoryFn } from '@storybook/react';
import AvatarComponent, { AvatarComponentProps } from './index';

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
