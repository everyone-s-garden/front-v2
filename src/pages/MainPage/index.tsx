import { Box } from '@chakra-ui/react';
import { useGetUserInfo } from '@/services/user/query';

const MainPage = () => {
  const { data } = useGetUserInfo(1);
  console.log(data);

  return (
    <div>
      <Box height="300vh" bg="orange.200">
        Main
      </Box>
    </div>
  );
};

export default MainPage;
