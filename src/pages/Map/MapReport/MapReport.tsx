import { Box, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import MapReportForm from './components/MapReportForm';

const MapReport = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <Box w="fit-content" margin="0 auto">
      <Text margin="56px 0 66px 0" fontWeight="bold" fontSize="20px">
        신고하기
      </Text>

      <MapReportForm />
    </Box>
  );
};

export default MapReport;
