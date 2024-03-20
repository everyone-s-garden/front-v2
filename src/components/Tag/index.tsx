import {
  Circle,
  Flex,
  ResponsiveValue,
  useStyleConfig,
} from '@chakra-ui/react';

export interface TagProps {
  tagLabel?: string;
  size?: ResponsiveValue<string> | undefined;
  variant?: ResponsiveValue<string> | undefined;
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
          size={'9px'}
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
