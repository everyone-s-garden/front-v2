import { Box } from '@chakra-ui/react';
import { useGetUserInfo } from '@/services/user/query';

const Main = () => {
  const { data } = useGetUserInfo(1);

  return (
    <div>
      <Box height="300vh"></Box>
    </div>
  );
};

export default Main;
