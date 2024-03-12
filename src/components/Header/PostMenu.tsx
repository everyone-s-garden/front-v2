import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { PlusIcon } from '@/assets/icons';
import { postOptions } from './constants';

const PostMenu = () => {
  return (
    <Menu>
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
            as={ReactRouterLink}
            to={link}
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
          >
            <Text fontWeight="medium">{title}</Text>
            <Text fontSize={12} color="gray.700">
              {description}
            </Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PostMenu;
