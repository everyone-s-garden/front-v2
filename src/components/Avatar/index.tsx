import { Avatar } from '@chakra-ui/react';
import { DefaultProfile } from '@/assets/icons';

export interface AvatarComponentProps {
  size: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  name?: string;
  src?: string;
  iconLabel?: string;
  loading?: 'eager' | 'lazy';
}

//유저 이미지 없을 경우 기본 농부 이미지
const AvatarComponent = ({
  size,
  name,
  src = DefaultProfile,
  iconLabel,
  loading = 'lazy',
}: AvatarComponentProps) => {
  return (
    <Avatar
      size={size}
      name={name}
      src={src}
      iconLabel={iconLabel}
      loading={loading}
    />
  );
};

export default AvatarComponent;
