export const headerNavLinks = [
  { name: '홈', href: '/' },
  { name: '내 주변 분양', href: '/map' },
  // { name: '작물 거래', href: '/trading' },
  { name: '속닥속닥', href: '/community' },
  { name: '채팅', href: '/chat' },
] as const;

export const postOptions = [
  {
    title: '나의 텃밭 등록하기',
    description: '현재 가지고 있는 밭을 등록해요',
    link: '/create-my-garden',
  },
  {
    title: '분양하는 텃밭 등록하기',
    description: '판매 할 개인 밭을 등록해요',
    link: '/create-garden',
  },
  // {
  //   title: '작물 거래 글쓰기',
  //   description: '다양한 작물을 판매하는 글을 등록해요',
  //   link: '/trading/write',
  // },
  {
    title: '속닥속닥 글쓰기',
    description: '질문, 자랑, 공유 등 다양한 글을 작성해요',
    link: '/community/write',
  },
] as const;
