import { Avatar, AvatarProps } from '@chakra-ui/react';
import { DefaultProfileSVG } from '@/assets/icons';

const AvatarComponent = ({ src, loading = 'lazy', ...rest }: AvatarProps) => {
  return (
    <Avatar
      loading={loading}
      {...rest}
      bg={'transparent'}
      src={src}
      icon={<DefaultProfileSVG />}
    />
  );
};

export default AvatarComponent;
