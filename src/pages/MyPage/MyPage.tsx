import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { AvatarComponent } from '@/components';
import { ArrowDownIcon } from '@/assets/icons';
import { SeedIcon } from '@/assets/icons';
import {
  mainRoute,
  nearByRoute,
  settingsRoute,
  whispersRoute,
} from './constants';
import { IMainRoute } from './type';
import { useGetMyProfileInfo } from '@/services/user/query';
import { userFeedbackFabStore } from '@/stores/userFeedbackFabStore';

interface Routes {
  [key: string]: { tabName: string; keyword?: string; href: string }[];
}

const Panel = ({ tabName }: { tabName: string }) => {
  const nav = useNavigate();

  const routes: Routes = useMemo(
    () => ({
      '내 주변 분양': nearByRoute,
      // '작물 거래': cropTradeRoute,
      // '텃밭 관리': gardenManagementRoute,
      '속닥 속닥': whispersRoute,
      설정: settingsRoute,
      '유저의 소리함': [],
    }),
    [],
  );

  const routeItems = routes[tabName];

  return (
    <>
      {routeItems.map((item, index) => (
        <AccordionPanel
          key={item.tabName}
          m="0"
          px="0"
          pt="0"
          pb={index === routeItems.length - 1 ? '20px' : '24px'}
        >
          <Text
            as="button"
            onClick={() => nav(item.href)}
            color="#9e9e9e"
            fontWeight="semiBold"
            aria-label={item.tabName}
          >
            {item.tabName}
          </Text>
        </AccordionPanel>
      ))}
    </>
  );
};
const GridComponent = ({ item }: { item: IMainRoute }) => {
  const nav = useNavigate();

  const { setModalOpen } = userFeedbackFabStore();

  const clickAction = () => {
    item.keyword === 'userFeedback' ? setModalOpen() : nav(item.href);
  };

  return (
    <GridItem
      w="100%"
      bg="#F5F5F5"
      borderRadius="10px"
      px="20px"
      pt="47px"
      pb="20px"
      h="132px"
      display="flex"
      border="1px"
      borderColor="gray.200"
      as="button"
      aria-label={item.tabName}
      onClick={clickAction}
      pos="relative"
    >
      <Flex flexDir="column">
        <Text
          fontSize="18px"
          fontWeight="semiBold"
          color="black"
          textAlign="start"
          zIndex={2}
        >
          {item.tabName}
        </Text>
        <Text
          fontSize="12px"
          noOfLines={2}
          textAlign="start"
          color="black"
          zIndex={2}
        >
          {item.des}
        </Text>
        <Box pos="absolute" right={0} top="50%" transform="translateY(-50%)">
          <item.icon />
        </Box>
      </Flex>
    </GridItem>
  );
};

const MyPage = () => {
  const { data: myProfile } = useGetMyProfileInfo();
  const { setModalOpen } = userFeedbackFabStore();

  if (!myProfile) {
    return null;
  }

  return (
    <Box w="100vw">
      {/* 유저 프로필 */}
      <Box
        maxW="975px"
        ml="auto"
        mr="auto"
        px={{ mobile: '20px', tablet: '0px' }}
        pb={{ mobile: '0px', tablet: '120px' }}
      >
        <Flex
          w="full"
          h={{ mobile: 'fit-content', tablet: '151px' }}
          bg={{ mobile: 'inherit', tablet: 'orange.100' }}
          px={{ mobile: '0', tablet: '30px' }}
          borderRadius={{ mobile: '0', tablet: '10px' }}
          align="center"
          borderColor={{ mobile: 'gray.100', tablet: 'orange.200' }}
          borderWidth={{ mobile: '0px', tablet: '1px' }}
          borderBottomWidth={{ mobile: '1px', tablet: '0px' }}
          mt={{ mobile: '54px', tablet: '103px' }}
          pb={{ mobile: '29px', tablet: '0px' }}
        >
          <Box mr="12px" w="70px">
            <AvatarComponent size="full" src={myProfile.profileImage} />
          </Box>
          <Box>
            <Text
              mb="8px"
              color="orange.500"
              fontWeight="semiBold"
              fontSize="18px"
            >
              {myProfile.nickname}
            </Text>
            <Flex
              bg="orange.500"
              borderRadius="16px"
              alignItems="center"
              px="12px"
              mb="8px"
            >
              <Text
                color="white"
                fontSize={{ mobile: '14px', tablet: '16px' }}
                fontWeight="semiBold"
                mr="10px"
                my="4px"
              >
                씨앗 등급
              </Text>
              <Box w="20px">
                <SeedIcon />
              </Box>
            </Flex>
            <Text color="orange.500" fontSize="10px">
              {myProfile.email}
            </Text>
          </Box>
        </Flex>

        {/* Pc 버전 컨텐츠 */}
        <Box display={{ mobile: 'none', tablet: 'block' }}>
          <Text fontSize="24px" fontWeight="semiBold" mt="54px" color="black">
            마이페이지
          </Text>
          <Text color="black">
            모두의텃밭에서 활동한 내역 확인 및 정보를 수정할 수 있어요 !
          </Text>

          <Grid
            templateColumns="repeat(2,1fr)"
            gap="18px"
            mt="20px"
            rowGap="32px"
          >
            {mainRoute?.map((route) => (
              <GridComponent key={route.keyword} item={route} />
            ))}
          </Grid>
        </Box>

        {/* Mobile 버전 컨텐츠 */}

        <Box display={{ mobile: 'block', tablet: 'none' }} mt="4px">
          <Accordion allowToggle>
            {mainRoute.map((route) => (
              <AccordionItem
                key={route.tabName}
                borderTop="none"
                borderBottom="1px solid"
                borderColor="gray.100"
              >
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      py="0px"
                      px="0"
                      _hover={{
                        bg: 'transparent',
                      }}
                    >
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        py="20px"
                        fontSize="18px"
                        color="black"
                        fontWeight="semiBold"
                        onClick={() => {
                          if (route.tabName === '유저의 소리함') {
                            setModalOpen();
                          }
                        }}
                      >
                        {route.tabName}
                      </Box>
                      {route.tabName !== '유저의 소리함' && (
                        <ArrowDownIcon
                          style={{
                            transform: isExpanded
                              ? 'rotate(180deg)'
                              : 'rotate(0deg)',
                            transition: 'transform 0.2s ease-in-out',
                          }}
                        />
                      )}
                    </AccordionButton>
                    <Panel tabName={route.tabName} />
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default MyPage;
