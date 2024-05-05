import { List, ListItem } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

interface MapReportCategoryDropdownProps {
  categoryArr: string[];
  setCategory: Dispatch<SetStateAction<string>>;
  setShowCategory: Dispatch<SetStateAction<boolean>>;
}

const MapReportCategoryDropdown = ({
  categoryArr,
  setCategory,
  setShowCategory,
}: MapReportCategoryDropdownProps) => {
  return (
    <List
      pos="absolute"
      top="109px"
      w="full"
      borderRadius="10px"
      border="1px"
      borderColor="gray.200"
      bgColor="white"
      zIndex="1"
    >
      {categoryArr.slice(1).map((category, i) => (
        <ListItem
          w="full"
          h="54px"
          p="15px 27.97px"
          fontWeight="medium"
          cursor="pointer"
          key={i}
          onClick={() => {
            setCategory(category);
            setShowCategory(false);
          }}
        >
          {category}
        </ListItem>
      ))}
    </List>
  );
};

export default MapReportCategoryDropdown;
