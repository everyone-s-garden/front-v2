import type { Meta, StoryObj } from '@storybook/react';
import { Button, Text } from '@chakra-ui/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { PlusIcon } from '@/assets/icons';
import { postOptions } from '../Header/constants';
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownTrigger,
} from './Dropdown';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {},
  decorators: [withRouter],
  argTypes: {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: { children: null },
  argTypes: {
    variant: {
      control: 'radio',
      description: '그림자 유무를 설정합니다.',
      options: ['shadow', 'none'],
      defaultValue: 'shadow',
    },
    colorScheme: {
      control: 'radio',
      description: '메인 색상을 설정합니다.',
      options: ['green', 'orange'],
      defaultValue: 'green',
    },
  },
  render: (args) => (
    <Dropdown {...args}>
      <DropdownTrigger bg="orange.500" px={2} py={1} borderRadius={10}>
        <Text color="white">트리거 버튼</Text>
      </DropdownTrigger>

      <DropdownList>
        <DropdownItem>아이템 1</DropdownItem>
        <DropdownItem>아이템 2</DropdownItem>
        <DropdownItem>아이템 3</DropdownItem>
        <DropdownItem>아이템 4</DropdownItem>
      </DropdownList>
    </Dropdown>
  ),
};

export const 글쓰기: Story = {
  args: { children: '' },
  render: () => (
    <Dropdown>
      <DropdownTrigger>
        <Button
          leftIcon={<PlusIcon />}
          color="white"
          bg="green.500"
          borderRadius={10}
        >
          글쓰기
        </Button>
      </DropdownTrigger>

      <DropdownList w={300}>
        {postOptions.map(({ title, description, link }) => (
          <DropdownItem flexDir="column" alignItems="baseline" key={link}>
            <Text fontWeight="medium">{title}</Text>
            <Text fontSize={12}>{description}</Text>
          </DropdownItem>
        ))}
      </DropdownList>
    </Dropdown>
  ),
};
