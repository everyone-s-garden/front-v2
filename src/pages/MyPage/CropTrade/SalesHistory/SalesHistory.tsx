import { List, TabList, Tabs, Tab } from '@chakra-ui/react';
import { useState } from 'react';
import GardenItem from '../../components/GardenItem';
import MobileEditButton from '../../components/MobileEditButton';
import { cropMockData } from '../../mockData';

const tabList = [
  { tabName: '판매중', href: '*' },
  { tabName: '예약중', href: '*' },
  { tabName: '거래완료', href: '*' },
];

const SalesHistory = () => {
  const [checkboxOpen, setCheckboxOpen] = useState(false);

  return (
    <List
      w="100%"
      px={{ mobile: '20px', tablet: '0px' }}
      mt={{ mobile: '20px', tablet: '0' }}
    >
      <Tabs>
        <TabList
          pb={{ mobile: '10px', tablet: '16px' }}
          borderBottom="1px solid"
          borderColor="gray.100"
          gap="70px"
          mb={{ mobile: '16px', tablet: '28px' }}
        >
          {tabList.map((item) => (
            <Tab p="0" key={item.tabName}>
              {item.tabName}
            </Tab>
          ))}
        </TabList>
      </Tabs>
      <MobileEditButton
        checkboxOpen={checkboxOpen}
        setCheckboxOpen={setCheckboxOpen}
      />

      {cropMockData.map((item, idx) => (
        <GardenItem
          key={item.id}
          item={item}
          idx={idx}
          menu
          checkboxOpen={checkboxOpen}
        />
      ))}
    </List>
  );
};

export default SalesHistory;
