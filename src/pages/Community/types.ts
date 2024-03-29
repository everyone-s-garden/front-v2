export type PostType =
  | 'INFORMATION_SHARE'
  | 'GARDEN_SHOWCASE'
  | 'QUESTION'
  | 'ETC';

export type OrderByOptions =
  | 'COMMENT_COUNT'
  | 'RECENT_DATE'
  | 'LIKE_COUNT'
  | 'OLDER_DATE';

export interface PostParams {
  searchContent: string;
  offset: number;
  limit: number;
  postType: PostType;
  orderBy: OrderByOptions;
}

export interface Post {
  postId: number;
  title: string;
  likeCount: number;
  commentCount: number;
  content: string;
  preview: string | null;
  userInfo: {
    userId: number;
    profile: string | null;
    name: string;
    memberMannerGrade: string;
  };
  postType: PostType;
  createdDate: string;
}
