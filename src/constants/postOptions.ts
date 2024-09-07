import { PATH } from '@/routes/constants';

export const postOptions = [
  {
    title: '텃밭 일기 작성하기',
    description: '현재 가지고 있는 밭을 가꾸는 일기를 작성해요',
    link: PATH.MAP.CREATE_MY_GARDEN,
  },
  {
    title: '분양하는 텃밭 등록하기',
    description: '판매 할 개인 밭을 등록해요',
    link: PATH.MAP.CREATE_GARDEN,
  },
  // {
  //   title: '작물 거래 글쓰기',
  //   description: '다양한 작물을 판매하는 글을 등록해요',
  //   link: '/trading/write',
  // },
  {
    title: '속닥속닥 글쓰기',
    description: '질문, 자랑, 공유 등 다양한 글을 작성해요',
    link: PATH.COMMUNITY.CREATE,
  },
  {
    title: '유저의 소리함',
    description: '모두의 텃밭의 의견과 제안을 남겨요',
    link: 'feedback',
  },
] as const;
