import { List } from '@chakra-ui/react';
import { useState } from 'react';
import GardenItem from '../../components/GardenItem';
import MobileEditButton from '../../components/MobileEditButton';
import { gardenMockData } from '../../mockData';

const MyPost = () => {
  const [checkboxOpen, setCheckboxOpen] = useState(false);

  return (
    <List w="100%" px={{ mobile: '20px', tablet: '0px' }}>
      <MobileEditButton
        checkboxOpen={checkboxOpen}
        setCheckboxOpen={setCheckboxOpen}
      />

      {gardenMockData.map((item, idx) => (
        <GardenItem
          key={item.id}
          item={item}
          heart
          idx={idx}
          menu
          checkboxOpen={checkboxOpen}
        />
      ))}
    </List>
  );
};

export default MyPost;
