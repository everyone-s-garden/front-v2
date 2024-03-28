import { Post } from '@/pages/Community/types';

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
      memberMannerGrade: 'A',
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
      memberMannerGrade: 'B',
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
      memberMannerGrade: 'C',
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
      memberMannerGrade: 'D',
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
      memberMannerGrade: 'A+',
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
      memberMannerGrade: 'B+',
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
      memberMannerGrade: 'C-',
    },
    postType: 'QUESTION',
    createdDate: '2024-03-22',
  },
];
