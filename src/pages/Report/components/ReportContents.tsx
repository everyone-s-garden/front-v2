import { Box, FormLabel, Textarea } from '@chakra-ui/react';

const ReportContents = () => {
  return (
    <Box>
      <FormLabel htmlFor="content" mb={{ mobile: '14px', tablet: '20px' }}>
        문의 내용
      </FormLabel>
      <Textarea
        id="content"
        h="119px"
        p={'16px'}
        placeholder="문의내용을 자세하게 입력해주세요."
        _placeholder={{ color: 'gray.400' }}
        resize="none"
        borderRadius="10px"
        border="1px"
        borderColor="gray.200"
        fontSize={{ mobile: '14px', tablet: '16px' }}
        fontWeight={'medium'}
        variant={'unstyled'}
      />
    </Box>
  );
};

export default ReportContents;
