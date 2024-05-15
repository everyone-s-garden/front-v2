import { Flex, FlexProps, FormLabel, Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface FlexInputProps extends FlexProps {
  label: string;
  errorMessage?: string;
  errorTop?: number;
}

const FlexInput = ({
  label,
  errorMessage,
  errorTop = 60,
  children,
  ...props
}: PropsWithChildren<FlexInputProps>) => {
  return (
    <Flex
      align={'center'}
      pos={'relative'}
      gap={{ mobile: '20px', tablet: '24px' }}
      minH={'56px'}
    >
      <FormLabel fontWeight={'medium'} flexShrink={0} margin={0}>
        {label}
      </FormLabel>
      <Flex align={'center'} {...props}>
        {children}
      </Flex>
      {errorMessage && (
        <Text
          pos={'absolute'}
          top={`${errorTop}px`}
          color={'error'}
          fontSize={'14px'}
          fontWeight={'medium'}
        >
          {errorMessage}
        </Text>
      )}
    </Flex>
  );
};

export default FlexInput;
