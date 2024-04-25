import { Comments, Post, PostDetail, User } from '@/pages/Community/types';

export const DUMMY_POST: Post[] = [
  {
    postId: 1,
    title: 'First Post',
    likeCount: 10,
    commentCount: 5,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    preview:
      'https://media.hellobot.co/fixedmenu/%E1%84%89%E1%85%B5%E1%84%85%E1%85%A9_%E1%84%8B%E1%85%A1%E1%84%86%E1%85%AE%20%E1%84%8B%E1%85%B5%E1%84%85%E1%85%B3%E1%86%B7%20%E1%84%8C%E1%85%B5%E1%86%BA%E1%84%80%E1%85%B5.png',
    userInfo: {
      userId: 1,
      profile: null,
      name: 'John Doe',
      memberMannerGrade: 'SEED',
    },
    postType: 'INFORMATION_SHARE',
    createdDate: '2024-03-28',
  },
  {
    postId: 2,
    title: 'Second Post',
    likeCount: 15,
    commentCount: 8,
    content:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    preview:
      'https://media.hellobot.co/fixedmenu/%E1%84%89%E1%85%B5%E1%84%85%E1%85%A9_%E1%84%8B%E1%85%A1%E1%84%86%E1%85%AE%20%E1%84%8B%E1%85%B5%E1%84%85%E1%85%B3%E1%86%B7%20%E1%84%8C%E1%85%B5%E1%86%BA%E1%84%80%E1%85%B5.png',
    userInfo: {
      userId: 2,
      profile: null,
      name: 'Jane Smith',
      memberMannerGrade: 'SEED',
    },
    postType: 'GARDEN_SHOWCASE',
    createdDate: '2024-03-27',
  },
  {
    postId: 3,
    title: 'Third Post',
    likeCount: 20,
    commentCount: 12,
    content:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    preview: null,
    userInfo: {
      userId: 3,
      profile: null,
      name: 'Alice Johnson',
      memberMannerGrade: 'SEED',
    },
    postType: 'QUESTION',
    createdDate: '2024-03-26',
  },
  {
    postId: 4,
    title:
      'Fourth Post Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    likeCount: 8,
    commentCount: 3,
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    preview:
      'https://media.hellobot.co/fixedmenu/%E1%84%89%E1%85%B5%E1%84%85%E1%85%A9_%E1%84%8B%E1%85%A1%E1%84%86%E1%85%AE%20%E1%84%8B%E1%85%B5%E1%84%85%E1%85%B3%E1%86%B7%20%E1%84%8C%E1%85%B5%E1%86%BA%E1%84%80%E1%85%B5.png',
    userInfo: {
      userId: 4,
      profile: null,
      name: 'David Brown',
      memberMannerGrade: 'SEED',
    },
    postType: 'ETC',
    createdDate: '2024-03-25',
  },
  {
    postId: 5,
    title: 'Fifth Post',
    likeCount: 25,
    commentCount: 15,
    content:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    preview: null,
    userInfo: {
      userId: 5,
      profile: null,
      name: 'Emily Wilson',
      memberMannerGrade: 'SEED',
    },
    postType: 'INFORMATION_SHARE',
    createdDate: '2024-03-24',
  },
  {
    postId: 6,
    title: 'Sixth Post',
    likeCount: 18,
    commentCount: 10,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    preview:
      'https://media.hellobot.co/fixedmenu/%E1%84%89%E1%85%B5%E1%84%85%E1%85%A9_%E1%84%8B%E1%85%A1%E1%84%86%E1%85%AE%20%E1%84%8B%E1%85%B5%E1%84%85%E1%85%B3%E1%86%B7%20%E1%84%8C%E1%85%B5%E1%86%BA%E1%84%80%E1%85%B5.png',
    userInfo: {
      userId: 6,
      profile: null,
      name: 'Michael Lee',
      memberMannerGrade: 'SEED',
    },
    postType: 'GARDEN_SHOWCASE',
    createdDate: '2024-03-23',
  },
  {
    postId: 7,
    title: 'Seventh Post',
    likeCount: 16,
    commentCount: 9,
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    preview: null,
    userInfo: {
      userId: 7,
      profile: null,
      name: 'Sophia Garcia',
      memberMannerGrade: 'SEED',
    },
    postType: 'QUESTION',
    createdDate: '2024-03-22',
  },
];

export const DUMMY_POST_DETAIL: PostDetail = {
  commentCount: 3,
  likeCount: 5,
  userInfo: {
    userId: 1,
    profile: 'https://www.studiopeople.kr/common/img/default_profile.png',
    name: '김코딩',
    memberMannerGrade: 'SEED',
  },
  content:
    '텃밭에서 키운 방울토마토와 상추를 수확했어요. 주말농장을 운영하는 내내 힘들기도하고 어떻게 시작을 해야 할지 모르는 상태에서 시작 했는데 수확해서 너무 기뻐요!\n\n저희 매주 가는 주말농장에서 키운 방울 토마토입니다.\n10평 남짓 텃밭에서 가꾸는 저의 텃밭에 방울토마토가 주렁 주렁 열렸어요 !',
  title: '저희 텃밭에서 몇가지 야채를 수확했어요 ! #텃밭 #수확의 기쁨',
  createdDate: '2021-08-01',
  isLikeClick: false,
  postType: 'QUESTION',
  images: [
    'https://www.durenature.co.kr/data/editor/2104/thumb-85ad254c2972c9943bd748aaa69c0420_1617861428_3653_1024x683.jpg',
    'https://mblogthumb-phinf.pstatic.net/MjAyMTA0MTVfMjYg/MDAxNjE4NDUxNjQ5Nzk1.AaQFwqEsO8n644Ylx4oqZkcZ66H8kpy6LjhcynNk2AUg.CvvmVq1qacvh_rF6y74tSQUy0qA4I1epXYp4S0LZASUg.JPEG.rda2448/SE-53f9d894-8f9f-4bd5-949b-d0ea75fa461a.jpg?type=w800',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuj7hUjquBEjADfQFOA7IeYJcIxYG0ug5tLz513wAXkA&s',
  ],
};

export const DUMMY_MY_INFO: User = {
  userId: 1,
  name: '김코딩',
  profile: 'https://www.studiopeople.kr/common/img/default_profile.png',
  memberMannerGrade: 'SEED',
};

export const DUMMY_COMMENT: Comments = {
  parents: [
    {
      commentId: 1,
      likeCount: 2,
      content: '와우 대단해요!',
      createdDate: '2021-08-01',
      userInfo: {
        userId: 2,
        name: '이코딩',
        profile: 'https://www.studiopeople.kr/common/img/default_profile.png',
        memberMannerGrade: 'SEED',
      },
      isLikeClick: false,
      subComments: [
        {
          commentId: 2,
          likeCount: 1,
          content:
            '와 토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 ! 와 토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 !  토마토 정말 대박이에요 !',
          createdDate: '2021-08-01',
          userInfo: {
            userId: 3,
            name: '박코딩',
            profile:
              'https://www.studiopeople.kr/common/img/default_profile.png',
            memberMannerGrade: 'SEED',
          },
          isLikeClick: false,
        },
      ],
    },
    {
      commentId: 3,
      likeCount: 1,
      content: '주말농장 너무 멋있네요  : >',
      createdDate: '2024-03-01',
      userInfo: {
        userId: 4,
        name: '최코딩',
        profile: 'https://www.studiopeople.kr/common/img/default_profile.png',
        memberMannerGrade: 'SEED',
      },
      isLikeClick: false,
      subComments: [],
    },
  ],
};
