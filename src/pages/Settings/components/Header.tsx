import { Center } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <Center bg="green.100" w="full" h="218px" flexDir="column">
      {children}
    </Center>
  );
};

export default Header;
