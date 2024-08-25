import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { UserFeedbackFabIcon, PlusIcon } from '@/assets/icons';
import { userFeedbackFabStore } from '@/stores/userFeedbackFabStore';
import UserFeedbackModal from '@/pages/MyPage/components/UserFeedbackModal';
import { mobileFabList } from './constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATH } from '@/routes/constants';

const UserFeedbackFab = () => {
  const { setModalOpen } = userFeedbackFabStore();
  const nav = useNavigate();
  const location = useLocation();

  const navToItem = (link: string) => {
    if (link === 'feedback') {
      setModalOpen();
      return;
    }
    nav(link);
  };

  const mobileFabHide = location.pathname.includes(PATH.COMMUNITY.MAIN)
    ? 'none'
    : 'flex';

  return (
    <>
      {/* pc version */}
      <Box
        pos={'absolute'}
        w={'56px'}
        h={'56px'}
        bg={'green.500'}
        bottom={10}
        right={10}
        zIndex={999}
        borderRadius={10}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        hideBelow={'tablet'}
        onClick={() => setModalOpen()}
      >
        <UserFeedbackFabIcon />
      </Box>

      {/* mobile version */}

      <Box
        sx={{ display: mobileFabHide }}
        pos={'absolute'}
        w={'52px'}
        h={'52px'}
        bg={'green.500'}
        bottom={5}
        right={5}
        zIndex={999}
        borderRadius={10}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        hideFrom={'tablet'}
      >
        <Menu placement="top-end">
          <MenuButton w="100%" h="100%" as="button">
            <PlusIcon />
          </MenuButton>
          <MenuList>
            {mobileFabList.map((item, idx) => (
              <MenuItem
                key={`${item.key}-${idx}`}
                display={'flex'}
                flexDir={'column'}
                alignItems={'flex-start'}
                px="20px"
                gap="4px"
                onClick={() => navToItem(item.link)}
              >
                <Text fontWeight="medium">{item.title}</Text>
                <Text fontSize={12} color="sub">
                  {item.subTitle}
                </Text>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
      <UserFeedbackModal />
    </>
  );
};

export default UserFeedbackFab;
