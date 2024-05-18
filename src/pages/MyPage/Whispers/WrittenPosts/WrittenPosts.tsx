import { List } from '@chakra-ui/react';
import { useState } from 'react';
import MobileEditButton from '../../components/MobileEditButton';
import WhisperItem from '../../components/WhisperItem';
import { whisperMockData } from '../../mockData';

const WrittenPosts = () => {
  const [checkboxOpen, setCheckboxOpen] = useState(false);

  return (
    <List w="full" px={{ mobile: '20px', tablet: '0px' }}>
      <MobileEditButton
        checkboxOpen={checkboxOpen}
        setCheckboxOpen={setCheckboxOpen}
      />
      {whisperMockData.map((item, idx) => (
        <WhisperItem
          key={item.id}
          item={item}
          menu
          checkboxOpen={checkboxOpen}
          idx={idx}
        />
      ))}
    </List>
  );
};

export default WrittenPosts;
