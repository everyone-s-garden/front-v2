import { Grade } from '@/types/grade';

export interface ChatRoom {
  recentContents: string;
  readNotCnt: number;
  postInfo: {
    postId: number;
    images: string[];
  };
  partnerInfo: {
    partnerId: number;
    nickName: string;
    imageUrl: string | undefined;
    memberMannerGrade: Grade;
  };
  createdAt: string;
  chatRoomId: number;
  chatMessageId: number;
}

export interface ChatRooms {
  hasNext: boolean;
  responses: ChatRoom[];
}

export interface EnterChatRoom {
  partnerId: number;
  partnerNickname: string;
  postId: number;
  gardenStatus: string;
  gardenName: string;
  price: number;
  images: string[];
  partnerMannerGrade: string;
  partnerProfileImage: string;
}

export interface ChatContent {
  chatMessageId: number;
  chatRoomId: number;
  memberId: number;
  contents: string;
  createdAt: string;
  readOrNot: boolean;
}

export interface ChatContentsResponse {
  hasNext: boolean;
  gardenChatMessageResponses: ChatContent[];
}
