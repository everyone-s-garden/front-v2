import { Box, Button, FormControl, Text } from '@chakra-ui/react';
import ReportCategory from './ReportCategory';
import ReportContents from './ReportContents';
import ReportNotice from './ReportNotice';

const ReportForm = () => {
  return (
    <form>
      <FormControl
        w={{ mobile: '', tablet: '606px' }}
        mx={{ mobile: '20px', tablet: 'none' }}
        display="flex"
        flexDir="column"
        gap="30px"
        mb="100px"
        mt={{ mobile: '24px', tablet: '' }}
      >
        <Text
          fontSize="18px"
          mb={{ mobile: '-4px', tablet: '' }}
          fontWeight="semibold"
        >
          내 주변 분양 신고
        </Text>
        <ReportCategory />
        <ReportContents />
        <ReportNotice />
      </FormControl>

      <Box display={{ mobile: 'block', tablet: 'flex' }}>
        <Button
          variant={'unstyled'}
          pos={{ mobile: 'fixed', tablet: 'static' }}
          bottom={0}
          w={{ mobile: '100%', tablet: '344px' }}
          h={{ mobile: '60px', tablet: '54px' }}
          m={{ mobile: 0, tablet: '0 auto 100px auto' }}
          borderRadius={{ mobile: '0', tablet: '10px' }}
          bg={'green.500'}
          fontWeight={'semiBold'}
          color={'white'}
          type={'submit'}
        >
          신고하기
        </Button>
      </Box>
    </form>
  );
};

export default ReportForm;
