import { Box, Text } from '@chakra-ui/react';
import { Dropdown, DropdownItem, DropdownTrigger } from '@/components';
import { ThreeDotsMenuIcon } from '@/assets/icons';
import { useDeletePost } from '@/services/mypage/query';
import { useLocation } from 'react-router-dom';

interface MenuButtonProps {
  ml: string;
  itemId: number;
}
const MenuButton = ({ ml, itemId }: MenuButtonProps) => {
  const { mutate: deletePost } = useDeletePost();
  const { pathname } = useLocation();

  // const dd = useDeletePost();
  const handleDeleteClick = async () => {
    deletePost({ path: pathname, id: itemId });
  };
  return (
    <Box display={{ mobile: 'none', tablet: 'block' }} ml={ml} pos="relative">
      <Dropdown>
        {({ isOpen }) => (
          <>
            <DropdownTrigger w="fit-content">
              <ThreeDotsMenuIcon />
            </DropdownTrigger>
            <Box
              py="0px"
              pos="absolute"
              border="1px"
              borderColor="gray.100"
              borderRadius="10px"
              right="0"
              zIndex={2}
              display={isOpen ? 'block' : 'none'}
            >
              <DropdownItem
                justifyContent="center"
                w="111px"
                px="0px"
                py="0px"
                onClick={() => alert(`수정하기 클릭`)}
              >
                <Text
                  fontWeight="medium"
                  fontSize="16px"
                  py="20px"
                  color="gray.700"
                >
                  게시글 수정
                </Text>
              </DropdownItem>
              <DropdownItem
                justifyContent="center"
                w="111px"
                px="0px"
                py="20px"
                onClick={handleDeleteClick}
              >
                <Text fontWeight="medium" fontSize="16px" color="gray.700">
                  삭제하기
                </Text>
              </DropdownItem>
            </Box>
          </>
        )}
      </Dropdown>
    </Box>
  );
};

export default MenuButton;
