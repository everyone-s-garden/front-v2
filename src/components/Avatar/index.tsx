import { Avatar, AvatarProps } from '@chakra-ui/react';
import { DefaultProfile } from '@/assets/icons';

const AvatarComponent = ({
  size,
  name,
  src,
  iconLabel,
  loading = 'lazy',
}: AvatarProps) => {
  //유저 이미지 없을 경우 기본 농부 이미지
  const profileSrc = src || DefaultProfile;

  return (
    <Avatar
      size={size}
      name={name}
      src={profileSrc}
      iconLabel={iconLabel}
      loading={loading}
    />
  );
};

export default AvatarComponent;
