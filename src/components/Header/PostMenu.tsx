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
        color="white"
        w={94}
        h={36}
        borderRadius={10}
        css={{ '& > span': { color: 'white', margin: 0, flexGrow: 0 } }}
        gap={8}
      >
        글쓰기
      </MenuButton>
      <MenuList
        borderRadius={10}
        border="1px solid"
        borderColor="gray.200"
        overflow="hidden"
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
            w={300}
            h={80}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            px={20}
            gap={8}
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
