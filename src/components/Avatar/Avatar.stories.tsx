import { Meta, StoryFn } from '@storybook/react';
import AvatarComponent from './index';
import { AvatarProps } from '@chakra-ui/react';

const meta: Meta<typeof AvatarComponent> = {
  title: 'Components/Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<AvatarProps> = (args) => <AvatarComponent {...args} />;

export const AvatarStory = Template.bind({});
