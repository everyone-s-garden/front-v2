import { Flex, FlexProps, FormLabel, Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface FlexInputProps extends FlexProps {
  label: string;
  errorMessage?: string;
  errorTop?: { mobile: string; tablet: string } | string;
  divider?: boolean;
}

const FlexInput = ({
  label,
  errorMessage,
  errorTop = '60px',
  divider = false,
  children,
  ...props
}: PropsWithChildren<FlexInputProps>) => {
  return (
    <Flex
      align={'center'}
      pos={'relative'}
      gap={{ mobile: '20px', tablet: '24px' }}
      minH={'56px'}
      borderBottom={divider ? '1px solid' : undefined}
      borderColor={'gray.100'}
    >
      <FormLabel fontWeight={'semiBold'} flexShrink={0} margin={0}>
        {label}
      </FormLabel>
      <Flex align={'center'} {...props}>
        {children}
      </Flex>
      {errorMessage && (
        <Text
          pos={'absolute'}
          top={errorTop}
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
