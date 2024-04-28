import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react';
import Header from './components/Header';
import { mainRoute } from './constants';

const Settings = () => {
  return (
    <Flex flexDir="column">
      <Header>
        <Text color="black" fontSize="24px" fontWeight="semiBold" mb="12px">
          설정
        </Text>
        <Text color="gray.700" fontSize="16px" fontWeight="regular">
          고객센터 및 정보 수정을 할 수 있어요
        </Text>
      </Header>

      <Box alignSelf="center" mt="56px" w="full" maxW="662px">
        {mainRoute.map((route) => (
          <Box key={route.listHeader}>
            <Box
              pl="33.95px"
              bg="green.100"
              pt="18px"
              pb="14px"
              borderBottom="1px solid"
              borderColor="gray.100"
              w="full"
            >
              {route.listHeader}
            </Box>
            <List key={route.listHeader}>
              {route.listItems.map((item) => (
                <ListItem
                  pl="33.95px"
                  as="button"
                  py="16px"
                  w="full"
                  display="flex"
                  justifyContent="flex-start"
                  key={item.name}
                  borderBottom="1px solid"
                  borderColor="gray.100"
                >
                  {item.name}
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </Flex>
  );
};

export default Settings;
