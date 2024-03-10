import { IconButton } from '@chakra-ui/react';
import { CustomArrowProps } from 'react-slick';
import { NextIcon, PrevIcon } from '@/assets/icons';

interface ArrowProps {
  dir: 'left' | 'right';
  color: 'green' | 'orange';
  size?: number;
}

const Arrow = ({
  className,
  onClick,
  dir,
  color,
  size = 40,
}: CustomArrowProps & ArrowProps) => {
  return (
    <IconButton
      icon={dir === 'left' ? <PrevIcon /> : <NextIcon />}
      aria-label={`${dir} button`}
      className={className}
      onClick={onClick}
      bg="white"
      borderRadius="50%"
      w={size}
      h={size}
      fill={`${color}.500`}
      display={{ mobile: 'none', tablet: 'flex' }}
      boxShadow="0px 2px 8px 0px rgba(33, 33, 33, 0.4)"
      alignItems="center"
      justifyContent="center"
    />
  );
};

export default Arrow;
