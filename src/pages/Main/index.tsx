import { Box } from '@chakra-ui/react';
import { TagComponent } from '@/components';
// import { useGetUserInfo } from '@/services/user/query';

const Main = () => {
  // const { data } = useGetUserInfo(1);

  return (
    <div>
      <Box height="300vh">
        <TagComponent tagLabel="화장실" variant="faq" />
      </Box>
    </div>
  );
};

export default Main;
