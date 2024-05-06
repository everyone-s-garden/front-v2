import { Box, FormLabel, Textarea } from '@chakra-ui/react';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from './MapReportForm';

interface MapReportContentsProps {
  register: UseFormRegister<FormValues>;
}

const MapReportContents = ({ register }: MapReportContentsProps) => {
  return (
    <Box>
      <FormLabel htmlFor="content" mb="20px">
        문의 내용
      </FormLabel>
      <Textarea
        id="content"
        {...register('content')}
        placeholder="문의내용을 자세하게 입력해주세요."
        resize="none"
        h="119px"
        borderRadius="10px"
        border="1px"
        borderColor="gray.200"
      />
    </Box>
  );
};

export default MapReportContents;
