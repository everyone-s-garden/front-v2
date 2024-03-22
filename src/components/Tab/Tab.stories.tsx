import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-react-router-v6';
import { headerNavLinks } from '../Header/constants';
import Tab from '../Tab/Tab';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

const exampleTabsData = [
  {
    tabName: '홈',
    href: '/',
    keyword: '',
  },
  {
    tabName: '탭2',
    href: '/test1',
    keyword: 'test1',
  },
  {
    tabName: '탭3',
    href: '/test2',
    keyword: 'test2',
  },
];

export const 기본: Story = {
  args: { tabsData: exampleTabsData, color: 'green' },
  argTypes: {
    color: {
      control: 'radio',
      description: '탭의 색상을 설정합니다.',
      options: ['green', 'orange'],
      defaultValue: 'green',
    },
    gap: {
      control: 'number',
      description: '탭 사이의 간격을 설정합니다.',
      defaultValue: 0,
    },
    tabWidth: {
      control: 'radio',
      description: '탭의 너비를 설정합니다.',
      options: ['full', 'fit', 100],
      defaultValue: 'fit',
    },
  },
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/',
      },
      routing: { path: '/' },
    }),
  },
  render: (args) => (
    <Box w={500}>
      <Tab {...args} />
    </Box>
  ),
};

export const Header: Story = {
  args: { color: 'orange', tabsData: headerNavLinks, tabWidth: 'full' },
};
