import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileGarden from './components/ProfileGarden/ProfileGarden';
import ProfileTab from './components/ProfileTab';
import ProfileCard from './components/profileCard/ProfileCard';

const Profile = () => {
  const profileTabs = ['나의 텃밭', '분양하는 텃밭', '작물거래', '속닥속닥'];
  const [activeTab, setActiveTab] = useState(profileTabs[0]);
  const { userId } = useParams();
  console.log(userId);

  return (
    <Box w={{ mobile: '', tablet: '' }} mx={{ mobile: '20px', tablet: '0' }}>
      <ProfileTab
        profileTabs={profileTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ProfileCard />

      {activeTab === profileTabs[0] && <ProfileGarden />}
    </Box>
  );
};

export default Profile;
