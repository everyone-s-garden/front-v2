import { Box, Flex, Icon } from '@chakra-ui/react';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import { useFormContext, useWatch } from 'react-hook-form';
import { useNavermaps } from 'react-naver-maps';
import { SearchIcon } from '@/assets/icons';
import { MyGarden } from '../MyGardenEdit/schema';

const AddressSearchBar = () => {
  const navermaps = useNavermaps();
  const { control, setValue, clearErrors } = useFormContext<
    MyGarden | Garden
  >();
  const value = useWatch({ control, name: 'address' });
  const open = useDaumPostcodePopup();

  const handleComplete = (data: Address) => {
    navermaps.Service.geocode(
      { query: data.roadAddress },
      (status, response) => {
        if (status === navermaps.Service.Status.ERROR) {
          return alert('오류가 발생하였습니다. 다시 시도해주세요.');
        }
        const { x, y } = response.v2.addresses[0];
        setValue('address', data.roadAddress);
        setValue('longitude', Number(x));
        setValue('latitude', Number(y));
        clearErrors('address');
      },
    );
  };

  const handleClick = () => {
    open({ onComplete: handleComplete, popupKey: 'address' });
  };

  return (
    <Box pos="relative" flexGrow="1" cursor="pointer" onClick={handleClick}>
      <Flex
        bg="gray.50"
        borderRadius="10px"
        align="center"
        gap="10px"
        p="14px 11px"
        h="40px"
      >
        <Box w="100%" fontWeight="medium" color={value ? 'black' : 'gray.400'}>
          {value || '주소를 입력해주세요.'}
        </Box>
        <Icon as={SearchIcon} fill="gray.400" w="20px" h="20px" />
      </Flex>
    </Box>
  );
};

export default AddressSearchBar;
