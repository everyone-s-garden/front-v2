import {
  NearbyGardenMyPageIcon,
  UserFeedBackMyPageIcon,
  WhisperMyPageIcon,
} from '@/assets/icons';
import { PATH } from '@/routes/constants';

export const PANELS = [
  {
    tabName: '텃밭 활동',
    description: '내 주변 분양에서 활동한 내역을 볼 수 있어요.',
    href: PATH.MYPAGE.NEARBY_GARDENS_INFO.MAIN,
    icon: NearbyGardenMyPageIcon,
    subPages: [
      {
        tabName: '찜한 텃밭',
        href: PATH.MYPAGE.NEARBY_GARDENS_INFO.FAVORITED_GARDENS,
      },
      {
        tabName: '최근 본 텃밭',
        href: PATH.MYPAGE.NEARBY_GARDENS_INFO.RECENTLY_VIEWED_GARDENS,
      },
      {
        tabName: '내 분양 텃밭',
        href: PATH.MYPAGE.NEARBY_GARDENS_INFO.MY_POSTS,
      },
    ],
    isNavBar: true,
  },
  {
    tabName: '속닥 속닥',
    description: '속닥속닥에서 활동한 내역을 볼 수 있어요.',
    href: PATH.MYPAGE.WHISPERS.MAIN,
    icon: WhisperMyPageIcon,
    subPages: [
      {
        tabName: '작성한 글',
        href: PATH.MYPAGE.WHISPERS.WRITTEN_POSTS,
      },
      {
        tabName: '댓글 단 글',
        href: PATH.MYPAGE.WHISPERS.COMMENTED_POSTS,
      },
      {
        tabName: '좋아요 누른 글',
        href: PATH.MYPAGE.WHISPERS.LIKED_POSTS,
      },
      {
        tabName: '텃밭 일기',
        href: PATH.MYPAGE.WHISPERS.GARDEN_DIARY,
      },
    ],
    isNavBar: true,
  },
  // {
  //   tabName: '설정',
  //   description: '고객센터 및 회원정보를 수정할 수 있어요.',
  //   href: PATH.SETTINGS,
  //   icon: SettingsMyPageIcon,
  //   subPages: null,
  //   isNavBar: true,
  // },
  {
    tabName: '유저의 소리함',
    description: '모두의텃밭에 대한 의견을 남겨주세요.',
    href: null,
    icon: UserFeedBackMyPageIcon,
    subPages: null,
    isNavBar: false,
  },
];
