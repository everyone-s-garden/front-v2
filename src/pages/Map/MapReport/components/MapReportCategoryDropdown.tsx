import { List, ListItem } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { categoryArr } from './categoryArr';

interface MapReportCategoryDropdownProps {
  setCategory: (...event: string[]) => void;
  setShowCategory: Dispatch<SetStateAction<boolean>>;
}

const MapReportCategoryDropdown = ({
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
      overflow="hidden"
    >
      {categoryArr.slice(1).map((category, i) => (
        <ListItem
          w="full"
          h="54px"
          p="15px 27.97px"
          fontWeight="medium"
          cursor="pointer"
          borderBottom={
            i !== categoryArr.slice(1).length - 1 ? '1px solid' : 'none'
          }
          borderColor="gray.200"
          _hover={{ bgColor: 'green.100' }}
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
