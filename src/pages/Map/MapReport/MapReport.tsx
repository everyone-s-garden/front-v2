import { Box, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import MapReportForm from './components/MapReportForm';

const MapReport = () => {
  const { id } = useParams();

  return (
    <Box
      zIndex={{ mobile: '99', tablet: '0' }}
      bgColor="white"
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

      <MapReportForm id={id} />
    </Box>
  );
};

export default MapReport;
