import { Box, Tab, Tabs } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';

interface ProfileTabProps {
  profileTabs: string[];
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const ProfileTab = ({
  profileTabs,
  activeTab,
  setActiveTab,
}: ProfileTabProps) => {
  const handleClickTab = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Tabs
      pos={{ mobile: 'absolute', tablet: 'relative' }}
      overflowX="auto"
      display="flex"
      gap={{ tablet: '80px' }}
      w="full"
      h={{ tablet: '52px' }}
      justifyContent={{ tablet: 'center' }}
      alignItems={{ tablet: 'center' }}
      top={{ mobile: '221px', tablet: '0px' }}
      pb={{ mobile: '10px', tablet: '0px' }}
      borderY={{ tablet: '1px solid' }}
      borderColor={{ tablet: 'gray.100' }}
    >
      {profileTabs.map((tab, i) => (
        <Tab
          onClick={() => handleClickTab(tab)}
          key={i}
          p={0}
          maxH="fit-content"
          color={tab === activeTab ? 'GrayText' : 'gray.200'}
          fontWeight={{ mobile: 'semiBold', tablet: 'bold' }}
          fontSize={{ mobile: '16px', tablet: '18px' }}
          w={{ mobile: '25%', tablet: 'fit-content' }}
          textAlign="center"
          cursor="pointer"
        >
          {tab}
        </Tab>
      ))}

      <Box
        pos="absolute"
        left={
          (activeTab === profileTabs[0] ? '0' : undefined) ||
          (activeTab === profileTabs[1] ? '25%' : undefined) ||
          (activeTab === profileTabs[2] ? '50%' : undefined) ||
          (activeTab === profileTabs[3] ? '75%' : undefined)
        }
        w="25%"
        h="3px"
        bottom="0px"
        bgColor="green.500"
        transition="left 0.5s ease"
        display={{ mobile: 'block', tablet: 'none' }}
      />
    </Tabs>
  );
};

export default ProfileTab;
