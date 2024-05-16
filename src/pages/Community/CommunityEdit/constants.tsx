import { BoldIcon, ItalicIcon, UnderlineIcon } from '@/assets/icons';

export const MOBILE_HEIGHT = {
  SUBMIT_BUTTON: 60,
  TOOL_BAR: 68,
  IMAGE: 100,
  IMAGE_GAP: 16,
  EDITOR_GAP: 16,
} as const;

export const BLOCK_LABEL = {
  unstyled: '본문',
  'header-one': '제목 1',
  'header-two': '제목 2',
  'header-three': '서브',
} as const;

export const BLOCK_LABEL_KO = {
  본문: 'unstyled',
  '제목 1': 'header-one',
  '제목 2': 'header-two',
  서브: 'header-three',
} as const;

export const BLOCK_STYLE = {
  unstyled: {
    fontWeight: 'medium',
  },
  'header-one': {
    fontWeight: 'bold',
    fontSize: '20px',
  },
  'header-two': {
    fontWeight: 'semiBold',
    fontSize: '18px',
  },
  'header-three': {
    fontSize: '14px',
  },
} as const;

export const TEXT_BLOCK_STYLE = [
  {
    label: '본문',
    name: 'unstyled',
    styles: BLOCK_STYLE.unstyled,
  },
  {
    label: '제목 1',
    name: 'header-one',
    styles: BLOCK_STYLE['header-one'],
  },
  {
    label: '제목 2',
    name: 'header-two',
    styles: BLOCK_STYLE['header-two'],
  },
  {
    label: '서브',
    name: 'header-three',
    styles: BLOCK_STYLE['header-three'],
  },
] as const;

export const INLINE_STYLE = [
  {
    label: '볼드',
    name: 'BOLD',
    Icon: BoldIcon,
  },
  {
    label: '이탤릭',
    name: 'ITALIC',
    Icon: ItalicIcon,
  },
  {
    label: '밑줄',
    name: 'UNDERLINE',
    Icon: UnderlineIcon,
  },
] as const;
