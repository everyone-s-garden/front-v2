import { Box, FormLabel, Textarea } from '@chakra-ui/react';

const MapReportContents = () => {
  return (
    <Box>
      <FormLabel htmlFor="name" mb="20px">
        First name
      </FormLabel>
      <Textarea
        id="name"
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
