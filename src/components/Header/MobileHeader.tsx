import { Flex, IconButton, Image } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { ProfileIcon } from '@/assets/icons';
import Tab from '../Tab/Tab';
import { headerNavLinks } from './constants';
import mainLogo from './mainLogo.svg';
import { PATH } from '@/routes/constants';
import useShowGardenDetailStore from '@/stores/useShowGardenDetailStore';

const MobileHeader = ({ loggedIn = false }) => {
  const navigate = useNavigate();
  const { showGardenDetail } = useShowGardenDetailStore();

  const handleClickProfile = () => {
    if (loggedIn) {
      navigate(PATH.MYPAGE.MAIN);

      return;
    }

    sessionStorage.setItem('login-prev-page', window.location.pathname);
    navigate(PATH.LOGIN.MAIN);
  };

  return (
    <Flex
      h="100px"
      flexDir="column"
      justifyContent="space-between"
      hideFrom="tablet"
    >
      <Flex justify="space-between" pt="15px" px="20px">
        <Link to={PATH.MAIN}>
          <Image src={mainLogo} alt="모두의 텃밭 로고" w="127px" h="22px" />
        </Link>
        <IconButton
          aria-label="profile"
          icon={<ProfileIcon />}
          variant={'unstyled'}
          minW={'fit-content'}
          h={'fit-content'}
          fill={loggedIn ? 'black' : 'transparent'}
          stroke={'black'}
          onClick={handleClickProfile}
        />
      </Flex>
      {!showGardenDetail && (
        <nav>
          <Tab tabsData={headerNavLinks} color="orange" tabWidth="fit-full" />
        </nav>
      )}
    </Flex>
  );
};

export default MobileHeader;
