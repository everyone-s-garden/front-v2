import { Box } from '@chakra-ui/react';
import { CheckBoxIcon, EmptyCheckBoxIcon } from '@/assets/icons';

interface MobileCheckboxProps {
  checkedItems: Record<string, boolean>;
  handleCheckbox: (idx: number) => void;
  id: number;
  checkboxOpen?: boolean;
}

const MobileCheckbox = ({
  checkedItems,
  handleCheckbox,
  id,
  checkboxOpen,
}: MobileCheckboxProps) => {
  if (!checkboxOpen) return;

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    handleCheckbox(id);
  };

  return (
    <Box
      as="button"
      pos="absolute"
      top={{ mobile: '8px', tablet: '12px' }}
      left={{ mobile: '8px', tablet: '12px' }}
      display={{ mobile: 'block', tablet: 'none' }}
      bg="transparent"
      onClick={onClick}
    >
      {checkedItems[id] ? <CheckBoxIcon /> : <EmptyCheckBoxIcon />}
    </Box>
  );
};

export default MobileCheckbox;
