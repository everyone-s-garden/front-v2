import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileGarden from './components/ProfileGarden/ProfileGarden';
import ProfileTab from './components/ProfileTab';
import ProfileCard from './components/profileCard/ProfileCard';
import ProfileSaleGarden from './components/profileSaleGarden/ProfileSaleGarden';

const Profile = () => {
  const profileTabs = ['나의 텃밭', '분양하는 텃밭', '작물거래', '속닥속닥'];
  const [activeTab, setActiveTab] = useState(profileTabs[0]);
  const { userId } = useParams();
  console.log(userId);

  return (
    <Box pos="relative" mb={{ mobile: '187px', desktop: '0px' }}>
      <ProfileTab
        profileTabs={profileTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Flex
        flexDir={{ mobile: 'column', desktop: 'row' }}
        mt={{ mobile: '0px', desktop: '108px' }}
        pl={{ mobile: 0, desktop: '138px' }}
        mx={{ mobile: '20px', desktop: '0' }}
      >
        <ProfileCard />
        {activeTab === profileTabs[0] && <ProfileGarden />}
        {activeTab === profileTabs[1] && <ProfileSaleGarden />}
      </Flex>
    </Box>
  );
};

export default Profile;
