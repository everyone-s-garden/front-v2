import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import { headerNavLinks } from '../Header/constants';
import Tab from '../Tab/Tab';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
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
      options: ['green', 'white'],
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
      options: ['full', 'fit', 'fit-full'],
      defaultValue: 'fit',
    },
  },
  render: (args) => (
    <Box w={500}>
      <Tab {...args} />
    </Box>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
    layout: 'fullscreen',
  },
};

export const Header: Story = {
  args: { color: 'green', tabsData: headerNavLinks, tabWidth: 'fit-full' },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    layout: 'fullscreen',
  },
};
