import { PATH } from '@/routes/constants';

export const mobileFabList = [
  {
    key: 'mobile-fab-list',
    title: '텃밭 일기 작성하기',
    subTitle: '현재 가지고 있는 밭 등록해요.',
    link: PATH.MAP.CREATE_MY_GARDEN,
  },
  {
    key: 'mobile-fab-list',
    title: '판매하는 밭 등록하기',
    subTitle: '판매할 개인 밭을 등록해요.',
    link: PATH.MAP.CREATE_MY_GARDEN,
  },
  //   {
  //     key: 'mobile-fab-list',
  //     title: '작물거래 글쓰기',
  //     subTitle: '다양한 작물을 판매하는 글을 등록해요.',
  //     link: ,
  //   },
  {
    key: 'mobile-fab-list',
    title: '속닥속닥 글쓰기',
    subTitle: '질문, 자랑, 공유 등 다양한 글을 작성해요.',
    link: PATH.COMMUNITY.CREATE,
  },
  {
    key: 'mobile-fab-list',
    title: '유저의 소리함',
    subTitle: '모두의 텃밭의 의견과 제안을 남겨요.',
    link: 'feedback',
  },
];
