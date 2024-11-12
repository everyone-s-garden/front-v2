import { Grade } from '@/types/grade';

interface DefaultUserInfo {
  nickname: string;
  memberMannerGrade: Grade;
  email: string;
}
interface MyInfo extends DefaultUserInfo {
  profileImage: string;
}

interface OtherUserInfo extends DefaultUserInfo {
  profileImageUrl: string;
}
