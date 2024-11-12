import { Flex, Grid, Text } from '@chakra-ui/react';
import { PANELS } from '../../constants/panels';
import PanelItem from './PanelItem';

export default function PcPanel() {
  return (
    <Flex flexDir="column" w="100%">
      <Flex flexDir="column" gap="10px">
        <Text fontSize="24px" fontWeight="bold">
          마이페이지
        </Text>
        <Text fontSize="16px">
          모두의텃밭에서 활동한 내역 확인 및 정보를 수정할 수 있어요!
        </Text>
      </Flex>
      <Grid templateColumns="repeat(2,1fr)" gap="18px" mt="20px" rowGap="18px">
        {PANELS.map((item, index) => (
          <PanelItem key={index} item={item} />
        ))}
      </Grid>
    </Flex>
  );
}
