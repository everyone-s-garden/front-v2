import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownTrigger,
} from '@/components';
import { ETCIcon } from '@/assets/icons';
import { useDeleteGardenChatRoom } from '@/services/chat/query';

const BtnItems = ({ roomId }: { roomId: number }) => {
  const navigate = useNavigate();
  const { mutate: deleteChatRoom } = useDeleteGardenChatRoom();

  const handleDeleteChatRoom = () => {
    deleteChatRoom(roomId);
    navigate('/chat');
  };

  return (
    <Flex w={{ mobile: '100%', tablet: 'auto' }} gap="10px">
      {/* <Button
        variant="unstyled"
        display="flex"
        rounded="10px"
        fontSize="16px"
        fontWeight="semiBold"
        bg="green.300"
        border="1px solid"
        borderColor="green.500"
        w="100%"
        p={{ mobile: '8px', tablet: '0px 24px' }}
        justifyContent="center"
        alignItems="center"
      >
        후기 보내기
      </Button> */}
      <Dropdown>
        <DropdownTrigger
          rounded="10px"
          display={{ mobile: 'block', tablet: 'flex' }}
          bg={{ mobile: 'transparent', tablet: 'gray.200' }}
          p="10px"
          position={{ mobile: 'absolute', tablet: 'static' }}
          top="3px"
          right="3px"
        >
          <ETCIcon />
        </DropdownTrigger>
        <DropdownList>
          <DropdownItem onClick={handleDeleteChatRoom}>
            채팅방 나가기
          </DropdownItem>
        </DropdownList>
      </Dropdown>
    </Flex>
  );
};

export default BtnItems;
