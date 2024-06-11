import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuButtonProps,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from '@/assets/icons';
import { postOptions } from './constants';

export const PostMenu = (props: MenuButtonProps) => {
  const navigate = useNavigate();

  const handleClickPostButton = (path: string) => {
    navigate(path);
  };

  return (
    <Menu placement={'bottom-end'} {...props}>
      <MenuButton
        as={Button}
        leftIcon={<PlusIcon />}
        fontWeight="medium"
        bg="green.500"
        _hover={{ bg: 'green.500' }}
        _active={{ bg: 'green.500' }}
        color="white"
        w="94px"
        h="36px"
        borderRadius="10px"
        css={{
          '& > span': { color: 'white', margin: 0, flexGrow: 0, flexShrink: 0 },
        }}
        gap="8px"
      >
        글쓰기
      </MenuButton>
      <MenuList
        borderRadius="10px"
        border="1px solid"
        borderColor="gray.200"
        overflow="hidden"
        py={0}
      >
        {postOptions.map(({ title, description, link }) => (
          <MenuItem
            key={link}
            _notLast={{
              borderBottom: '1px solid',
              borderColor: 'gray.200',
            }}
            _hover={{
              bg: 'green.100',
            }}
            bg="white"
            w="300px"
            h="80px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            px="20px"
            gap="8px"
            onClick={() => handleClickPostButton(link)}
          >
            <Text fontWeight="medium">{title}</Text>
            <Text fontSize={12} color="sub">
              {description}
            </Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export const MobilePostMenu = (props: MenuButtonProps) => {
  const navigate = useNavigate();

  const handleClickPostButton = (path: string) => {
    navigate(path);
  };

  return (
    <Menu placement={'top-end'}>
      <MenuButton
        as={IconButton}
        icon={<PlusIcon />}
        aria-label="글쓰기"
        bg="green.500"
        _hover={{ bg: 'green.500' }}
        _active={{ bg: 'green.500' }}
        color="white"
        w="52px"
        h="52px"
        borderRadius="10px"
        {...props}
      />
      <MenuList
        borderRadius="10px"
        border="1px solid"
        borderColor="gray.200"
        overflow="hidden"
        py={0}
      >
        {postOptions.map(({ title, description, link }) => (
          <MenuItem
            key={link}
            _notLast={{
              borderBottom: '1px solid',
              borderColor: 'gray.200',
            }}
            _hover={{
              bg: 'green.100',
            }}
            bg="white"
            h="80px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            px="20px"
            gap="8px"
            onClick={() => handleClickPostButton(link)}
          >
            <Text fontWeight="medium">{title}</Text>
            <Text fontSize={12} color="sub">
              {description}
            </Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
