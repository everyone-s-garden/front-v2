import { Text } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { BottomMenu } from '@/components';
import { categoryArr } from './categoryArr';

interface MobileReportBottomMenuProps {
  setCategory: (...event: string[]) => void;
  setShowCategory: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
  onClose: () => void;
}

const MobileReportBottomMenu = ({
  isOpen,
  onClose,
  setCategory,
}: MobileReportBottomMenuProps) => {
  return (
    <BottomMenu isOpen={isOpen} onClose={onClose}>
      {categoryArr.slice(1).map((category, i) => (
        <Text
          p="18px"
          borderBottom="1px"
          borderColor="gray.200"
          fontWeight="medium"
          cursor="pointer"
          _hover={{ bgColor: 'green.100' }}
          userSelect="none"
          onClick={() => {
            setCategory(category);
            onClose();
          }}
          key={i}
        >
          {category}
        </Text>
      ))}
    </BottomMenu>
  );
};

export default MobileReportBottomMenu;
