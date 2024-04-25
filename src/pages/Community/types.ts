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

export interface User {
  userId: number;
  name: string;
  profile: string | null;
  memberMannerGrade: 'SEED';
}

export interface Post {
  postId: number;
  title: string;
  likeCount: number;
  commentCount: number;
  content: string;
  preview: string | null;
  userInfo: User;
  postType: PostType;
  createdDate: string;
}

export interface PostDetail extends Omit<Post, 'preview' | 'postId'> {
  images: string[];
  isLikeClick: boolean;
}

export interface Comment {
  commentId: number;
  likeCount: number;
  content: string;
  userInfo: User;
  isLikeClick: boolean;
  createdDate: string;
}

export interface Comments {
  parents: (Comment & { subComments: Comment[] })[];
}
