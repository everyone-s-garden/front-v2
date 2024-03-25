import { Box, Button, Flex, Icon, Input, Text } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { MobileMapArrow } from '@/assets/icons';

interface MobileMapHeaderProps {
  showOption: boolean;
  setShowOption: Dispatch<SetStateAction<boolean>>;
  mobileHeaderOption: string;
  mapHeaderOptions: string[];
  setMobileHeaderOption: Dispatch<SetStateAction<string>>;
}

const MobileMapHeader = ({
  showOption,
  setShowOption,
  mobileHeaderOption,
  mapHeaderOptions,
  setMobileHeaderOption,
}: MobileMapHeaderProps) => {
  return (
    <Flex h="67px" gap="8px" alignItems="center" padding="20px">
      <Box position="relative">
        <Button
          borderRadius="7px"
          w="100px"
          h="36px"
          bgColor="green.100"
          color="green.700"
          fontWeight="medium"
          fontSize="14px"
          _hover={{}}
          _active={{}}
          display="flex"
          gap="5px"
          onClick={() => {
            setShowOption(!showOption);
          }}
        >
          {mobileHeaderOption}
          <Icon
            as={MobileMapArrow}
            w="9px"
            h="8px"
            transform={showOption ? 'rotate( 180deg )' : undefined}
            transition="transform 0.3s ease"
          />
        </Button>
        {showOption && (
          <Box
            position="absolute"
            w="100%"
            borderRadius="7px"
            bgColor="white"
            overflow="hidden"
            zIndex="1"
          >
            {mapHeaderOptions.map((option, i) => (
              <Text
                padding="4px 16px"
                color="green.700"
                _hover={{
                  bgColor: 'green.100',
                }}
                cursor="pointer"
                onClick={() => {
                  setShowOption(!showOption);
                  setMobileHeaderOption(option);
                }}
                key={i}
              >
                {option}
              </Text>
            ))}
          </Box>
        )}
      </Box>
      <Input
        w="calc(100% - 100px)"
        variant="unstyled"
        bgColor="gray.50"
        border="none"
        h="36px"
        padding="0 12px"
        fontSize="14px"
        placeholder="지역명 검색"
      />
    </Flex>
  );
};
export default MobileMapHeader;
