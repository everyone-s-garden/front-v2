import { Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { PANELS } from '../constants/panels';
import { userFeedbackFabStore } from '@/stores/userFeedbackFabStore';

interface PanelItemProps {
  item: (typeof PANELS)[number];
}

export default function PanelItem({ item }: PanelItemProps) {
  const navigate = useNavigate();
  const setModalOpen = userFeedbackFabStore((state) => state.setModalOpen);

  const handlePanelItemClick = () => {
    if (item.href === null) {
      setModalOpen();
    } else {
      navigate(item.href);
    }
  };

  return (
    <Flex
      py="30px"
      pl="20px"
      w="100%"
      h="160px"
      bgColor="gray.50"
      border="1px solid"
      borderColor="gray.200"
      rounded="10px"
      align="center"
      justify="space-between"
      cursor="pointer"
      onClick={handlePanelItemClick}
    >
      <Flex flexDir="column" gap="8px">
        <Text fontSize="20px" fontWeight="bold">
          {item.tabName}
        </Text>
        <Text fontSize="14px" color="sub">
          {item.description}
        </Text>
      </Flex>
      <item.icon />
    </Flex>
  );
}
