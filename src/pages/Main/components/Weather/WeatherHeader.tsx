import { Button, Flex, Spinner, Text, createIcon } from '@chakra-ui/react';
import { useState } from 'react';
import { useMyLocationStore } from '@/stores/myLocationStore';
import getMyLocation from '@/utils/getMyLocation';

const LocationIcon = createIcon({
  displayName: 'LocationIcon',
  viewBox: '0 0 24 24',
  d: 'M12 13.5C12.663 13.5 13.2989 13.2366 13.7678 12.7678C14.2366 12.2989 14.5 11.663 14.5 11C14.5 10.337 14.2366 9.70107 13.7678 9.23223C13.2989 8.76339 12.663 8.5 12 8.5C11.337 8.5 10.7011 8.76339 10.2322 9.23223C9.76339 9.70107 9.5 10.337 9.5 11C9.5 11.663 9.76339 12.2989 10.2322 12.7678C10.7011 13.2366 11.337 13.5 12 13.5Z M19.0712 3.42924H19.0722C22.9772 7.33424 22.9772 13.6662 19.0722 17.5712L13.6692 22.9742C13.2267 23.4164 12.6267 23.6647 12.0012 23.6647C11.3757 23.6647 10.7757 23.4164 10.3332 22.9742L4.95822 17.5992L4.93021 17.5712C1.02521 13.6662 1.02521 7.33424 4.93021 3.42924C8.83422 -0.475762 15.1662 -0.475762 19.0712 3.42924ZM5.99021 4.48924C4.3964 6.08326 3.50103 8.2461 3.50103 10.5002C3.50103 12.7544 4.3964 14.9162 5.99021 16.5102L6.01322 16.5342L6.01521 16.5362L11.3932 21.9142C11.5543 22.0751 11.7726 22.1654 12.0002 22.1654C12.2278 22.1654 12.4462 22.0751 12.6072 21.9142L18.0102 16.5102C19.5852 14.9123 20.4646 12.7565 20.4565 10.5129C20.4484 8.26925 19.5536 6.1198 17.9672 4.53324C16.3808 2.94667 14.2314 2.05169 11.9878 2.04345C9.74415 2.03521 7.58826 2.91437 5.99021 4.48924Z',
});

const WeatherHeader = () => {
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const myLocation = useMyLocationStore((state) => state.myLocation);
  const setMyLatLng = useMyLocationStore((state) => state.setMyLatLng);

  const handleGetLocationButtonClick = async () => {
    setIsLocationLoading(true);
    const res = await getMyLocation();
    if (!res.errMsg) {
      setMyLatLng({
        lat: res.location.lat,
        lng: res.location.lng,
      });
    } else {
      alert(res.errMsg);
    }
    setIsLocationLoading(false);
  };

  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const amOrPm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')} ${amOrPm}`;

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      padding={{ mobile: '12px 16px', tablet: '14px 30px' }}
    >
      <Flex alignItems="center" gap="9px">
        <Text
          fontSize={{ mobile: '16px', tablet: '20px' }}
          fontWeight="semiBold"
        >
          {myLocation.position}
        </Text>
        <Text
          fontSize={{ mobile: '14px', tablet: '18px' }}
          fontWeight="regular"
        >
          {formattedTime}
        </Text>
      </Flex>
      {isLocationLoading ? (
        <Spinner size="md" color="orange.500" />
      ) : (
        <Button
          leftIcon={
            <LocationIcon
              w={{ mobile: '18px', tablet: '24px' }}
              h={{ mobile: '18px', tablet: '24px' }}
            />
          }
          p="0"
          h="fit-content"
          bg="none"
          fontSize={{ mobile: '14px', tablet: '18px' }}
          fontWeight="regular"
          _hover={{}}
          _active={{}}
          onClick={handleGetLocationButtonClick}
        >
          내 위치 찾기
        </Button>
      )}
    </Flex>
  );
};

export default WeatherHeader;
