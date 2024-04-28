import { List } from '@chakra-ui/react';
import WhisperItem from '../../components/WhisperItem';
import { whisperMockData } from '../../mockData';

const LikedPosts = () => {
  return (
    <List w="full" px={{ mobile: '20px', tablet: '0px' }}>
      {whisperMockData.map((item, idx) => (
        <WhisperItem key={item.id} item={item} idx={idx} />
      ))}
    </List>
  );
};

export default LikedPosts;
