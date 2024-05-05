import { Box, FormLabel, Icon, Text } from '@chakra-ui/react';
import { ArrowDownIcon } from '@/assets/icons';

const MapReportCategory = () => {
  return (
    <Box>
      <FormLabel mb="20px">상세 유형 선택</FormLabel>
      <Box
        w="100%"
        borderRadius="10px"
        border="1px"
        borderColor="gray.200"
        p="16px 24px"
        cursor="pointer"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text textColor="gray.400" fontSize="18px">
          상세 유형을 선택해주세요.
        </Text>
        <Icon as={ArrowDownIcon} w="24px" h="24px" />
      </Box>
    </Box>
  );
};

export default MapReportCategory;
