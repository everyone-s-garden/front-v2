import { Avatar, AvatarProps } from '@chakra-ui/react';
import { DefaultProfile } from '@/assets/icons';

const AvatarComponent = ({ src, loading = 'lazy', ...rest }: AvatarProps) => {
  //유저 이미지 없을 경우 기본 농부 이미지
  const profileSrc = src || DefaultProfile;

  return <Avatar src={profileSrc} loading={loading} {...rest} />;
};

export default AvatarComponent;
