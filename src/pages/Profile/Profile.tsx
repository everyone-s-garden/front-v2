import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileGarden from './components/ProfileGarden/ProfileGarden';
import ProfileTab from './components/ProfileTab';
import NoContent from './components/noContent/NoContent';
import ProfileCard from './components/profileCard/ProfileCard';
import ProfileCommunity from './components/profileCommunity/ProfileCommunity';
import ProfileSaleGarden from './components/profileSaleGarden/ProfileSaleGarden';
import {
  useGetOtherUsersGardenForSale,
  useGetOtherUsersGardens,
} from '@/services/gardens/query';
import { useGetUserInfo } from '@/services/user/query';

const Profile = () => {
  const profileTabs = ['텃밭 보기', '분양 텃밭', '속닥속닥'];
  const [activeTab, setActiveTab] = useState(profileTabs[0]);
  const { userId } = useParams();

  const { data: otherManagedGardensData } = useGetOtherUsersGardens(
    Number(userId),
  );
  const { data: userInfo } = useGetUserInfo(Number(userId));
  const { data: otherGardensForSaleData, refetch: refetchGardensForSale } =
    useGetOtherUsersGardenForSale(Number(userId));

  const otherManagedGardens =
    otherManagedGardensData?.otherManagedGardenGetResponses;
  const otherGardensForSale = otherGardensForSaleData?.otherGardenGetResponse;

  return (
    <Box w="full" pos="relative" mb={{ mobile: '187px', tablet: '0px' }}>
      <ProfileTab
        profileTabs={profileTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Box
        w={{ mobile: 'full', tablet: 'full' }}
        mx={{ desktop: 'auto' }}
        justifyContent="center"
      >
        <Flex
          w={{ desktop: '1024px' }}
          h="full"
          flexDir={{ mobile: 'column', tablet: 'row' }}
          mt={{ mobile: '0px', tablet: '48px', desktop: '108px' }}
          mx={{ mobile: '20px', tablet: '59px', desktop: 'auto' }}
          gap={{ mobile: '0px', tablet: '60px', desktop: '100px' }}
        >
          <ProfileCard userInfo={userInfo} />

          {activeTab === profileTabs[0] &&
            (otherManagedGardens?.length === 0 ? (
              <Box w={{ tablet: '886px' }} mb={{ tablet: '164px' }} mx={'auto'}>
                <NoContent type="garden" />
              </Box>
            ) : (
              <ProfileGarden
                userInfo={userInfo}
                otherManagedGardens={otherManagedGardens}
              />
            ))}
          {activeTab === profileTabs[1] &&
            (otherGardensForSale?.length === 0 ? (
              <Box w={{ tablet: '886px' }} mb={{ tablet: '164px' }} mx={'auto'}>
                <NoContent type="garden" />
              </Box>
            ) : (
              <ProfileSaleGarden
                otherGardensForSale={otherGardensForSale}
                refetchGardensForSale={refetchGardensForSale}
              />
            ))}
          {activeTab === profileTabs[2] && (
            <ProfileCommunity userId={userId as string} />
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default Profile;
