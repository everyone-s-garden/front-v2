import { Box, Text } from '@chakra-ui/react';

const MapReportNotice = () => {
  return (
    <Box>
      <Text mb={{ mobile: '14px', tablet: '20px' }}>유의 사항</Text>
      <Text textColor="gray.400" fontWeight="medium" fontSize="14px" mb="8px">
        산업안전 보건법에 따라 고객응대 근로자 보호조치를 시행하고 있습니다.
        욕설 또는 폭언을 하지 말아주세요.
      </Text>
      <Text textColor="gray.400" fontSize="14px" fontWeight="medium">
        접수는 24시간 가능합니다. 답변은 순차적으로 받을 수 있습니다.
      </Text>
    </Box>
  );
};

export default MapReportNotice;
