import { Box, FormLabel, Text, Textarea } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { Report } from '../schema';

const ReportContents = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Report>();

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
        borderColor={errors?.content?.message ? 'error' : 'gray.200'}
        fontSize={{ mobile: '14px', tablet: '16px' }}
        fontWeight={'medium'}
        variant={'unstyled'}
        {...register('content')}
      />
      <Text fontSize={'14px'} color={'error'} ml={'5px'} mt={'5px'}>
        {errors?.content?.message}
      </Text>
    </Box>
  );
};

export default ReportContents;
