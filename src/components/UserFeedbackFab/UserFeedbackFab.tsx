import {
  Box,
  Button,
  IconButton,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { PlusIcon } from '@/assets/icons';
import { PcFab } from '@/assets/images';
import { postOptions } from '@/constants/postOptions';
import UserFeedbackModal from '@/pages/MyPage/components/UserFeedbackModal';
import { userFeedbackFabStore } from '@/stores/userFeedbackFabStore';

const UserFeedbackFab = () => {
  const { setModalOpen } = userFeedbackFabStore();
  const navigate = useNavigate();

  const navToItem = (link: string) => {
    if (link === 'feedback') {
      setModalOpen();

      return;
    }
    navigate(link);
  };

  return (
    <>
      <Portal>
        <Button
          position="fixed"
          right="20px"
          bottom="20px"
          display="flex"
          variant="unstyled"
          w="56px"
          h="56px"
          bg="green.500"
          justifyContent="center"
          alignItems="center"
          onClick={setModalOpen}
          hideBelow="tablet"
        >
          <Img src={PcFab} alt="피드백 아이콘" w="37px" h="41px" />
        </Button>

        <Box hideFrom="tablet" position="fixed" right="20px" bottom="20px">
          <Menu placement="top-end">
            <MenuButton
              display="flex"
              justifyContent="center"
              alignItems="center"
              as={IconButton}
              icon={<PlusIcon />}
              bg="green.500"
              variant="unstyled"
            >
              <PlusIcon />
            </MenuButton>
            <MenuList>
              {postOptions.map(({ description, link, title }) => (
                <MenuItem
                  key={link}
                  display="flex"
                  flexDir="column"
                  alignItems="flex-start"
                  px="20px"
                  gap="4px"
                  onClick={() => navToItem(link)}
                >
                  <Text fontWeight="medium">{title}</Text>
                  <Text fontSize={12} color="sub">
                    {description}
                  </Text>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </Portal>
      <UserFeedbackModal />
    </>
  );
};

export default UserFeedbackFab;
