import { Box, FormLabel, Textarea } from '@chakra-ui/react';
import { UseFormRegister } from 'react-hook-form';

interface MapReportContentsProps {
  register: UseFormRegister<MapReportValues>;
}

const MapReportContents = ({ register }: MapReportContentsProps) => {
  return (
    <Box>
      <FormLabel htmlFor="content" mb={{ mobile: '14px', tablet: '20px' }}>
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
        fontSize={{ mobile: '14px', tablet: '16px' }}
      />
    </Box>
  );
};

export default MapReportContents;
