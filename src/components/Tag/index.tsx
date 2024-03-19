import { Box, Circle, Flex, useStyleConfig } from '@chakra-ui/react';
// importhemet  { colors } from '@/styles/theme';
// import React from 'react';

interface TagProps {
  tag?: string;
  tagLabel?: string;
  tagRightIcon?: string;
  tagCloseButton?: string;
  active?: boolean;
  size?: string;
  variant?: string;
  icon?: boolean;
  progress?: boolean;
}

const TagComponent = ({
  variant,
  size,
  tagLabel,
  icon,
  progress,
}: TagProps) => {
  const styles = useStyleConfig('TagStyleConfig', {
    variant,
    size,
    progress,
  });

  return (
    <Flex sx={styles} direction={'row'} w={'fit-content'} alignItems={'center'}>
      {icon && (
        <Circle
          size={3}
          mr={2}
          bg={'#FF6A00'}
          boxShadow={
            '0px 0px 2.1559886932373047px 1.0779943466186523px #FFC869'
          }
        />
      )}
      {tagLabel}
    </Flex>
  );
};

export default TagComponent;
