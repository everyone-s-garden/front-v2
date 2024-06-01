import { Box, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Location, useLocation, useNavigate } from 'react-router-dom';
import ReportForm from './components/ReportForm';
import { ReportState } from './types';
import { PATH } from '@/routes/constants';

const Report = () => {
  const location: Location<ReportState> = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      // NOTE: 그냥 접근할 경우 메인 페이지로 이동
      navigate(PATH.MAIN);
    }
  }, [location.state, navigate]);

  return (
    <Box
      minW={{ mobile: '100vw', tablet: 'fit-content' }}
      minH={{ mobile: '100vh', tablet: 'fit-content' }}
      pos={{ mobile: 'fixed', tablet: 'relative' }}
      top={{ mobile: '0', tablet: 'auto' }}
      w="fit-content"
      margin="0 auto"
    >
      <Text
        margin={{ mobile: 'none', tablet: '56px 0 66px 0' }}
        p={{ mobile: '16px 0', tablet: 'none' }}
        fontWeight={{ mobile: 'medium', tablet: 'bold' }}
        fontSize={{ mobile: '18px', tablet: '20px' }}
        textAlign="center"
        borderBottom={{ mobile: '1px', tablet: 'none' }}
        borderBottomColor={{ mobile: 'gray.100', tablet: 'none' }}
      >
        신고하기
      </Text>

      {location.state && <ReportForm {...location.state} />}
    </Box>
  );
};

export default Report;
