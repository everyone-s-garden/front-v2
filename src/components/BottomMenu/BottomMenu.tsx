import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

interface BottomMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const BottomMenu = ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<BottomMenuProps>) => {
  return (
    <Drawer placement="bottom" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent borderTopRadius="20px">{children}</DrawerContent>
    </Drawer>
  );
};

export default BottomMenu;
