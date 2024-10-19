import { Text, Image, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
// import BtnItems from './BtnItems';
import MobileHeader from './MobileHeader';
import { EnterChatRoom } from '@/services/chat/type';
import { useGetIndividualGarden } from '@/services/gardens/query';
import useMapGardenDetailIdStore from '@/stores/useMapGardenDetailIdStore';

const ContentHeader = ({ productInfo }: { productInfo: EnterChatRoom }) => {
  const navigate = useNavigate();
  const { setGardenId } = useMapGardenDetailIdStore();
  const {
    gardenName,
    gardenStatus,
    images,
    partnerNickname,
    price,
    partnerMannerGrade,
  } = productInfo;
  const { data: gardenDetailData } = useGetIndividualGarden(productInfo.postId);

  const handleGardenInfoClick = () => {
    if (!gardenDetailData) return;
    navigate('/map', {
      state: {
        data: {
          lat: gardenDetailData.latitude,
          lng: gardenDetailData.longitude,
        },
      },
    });
    setGardenId(gardenDetailData.gardenId);
  };

  return (
    <Flex
      w="100%"
      zIndex="1"
      justifyContent="space-between"
      alignItems={{ mobile: 'flex-start', tablet: 'center' }}
      // h={{ mobile: '193px', tablet: '86px' }}
      h={{ mobile: '125px', tablet: '86px' }}
      padding={{ mobile: '0 20px 10px 20px', tablet: '17px' }}
      flexDirection={{ mobile: 'column', tablet: 'row' }}
      borderBottom={{ mobile: '1px solid', tablet: 'none' }}
      borderLeft={{ mobile: 'none', tablet: '1px solid' }}
      borderColor={{ mobile: 'gray.100', tablet: 'gray.200' }}
      backgroundColor={{ mobile: 'white', tablet: 'gray.50' }}
    >
      <MobileHeader
        partnerNickname={partnerNickname}
        partnerMannerGrade={partnerMannerGrade}
      />
      <Flex alignItems="center" gap="15px">
        {gardenDetailData && (
          <Image
            w={{ mobile: '52px', tablet: '54px' }}
            h={{ mobile: '52px', tablet: '54px' }}
            borderRadius="10px"
            backgroundColor="gray.100"
            src={images[0]}
            flexShrink={0}
            cursor="pointer"
            onClick={handleGardenInfoClick}
          />
        )}
        <Flex flexDirection="column">
          <Flex
            alignItems="center"
            gap="8px"
            onClick={handleGardenInfoClick}
            cursor="pointer"
          >
            <Text
              fontSize={{ mobile: '16px', tablet: '18px' }}
              fontWeight="semiBold"
            >
              {gardenStatus === 'ACTIVE' ? '분양중' : '분양 완료'}
            </Text>
            <Text
              fontSize={{ mobile: '16px', tablet: '18px' }}
              fontWeight="medium"
            >
              {gardenName}
            </Text>
          </Flex>
          <Text
            fontSize={{ mobile: '16px', tablet: '18px' }}
            fontWeight="semiBold"
          >
            {price}원
          </Text>
        </Flex>
      </Flex>
      {/* 추가 예정 */}
      {/* <BtnItems /> */}
    </Flex>
  );
};

export default ContentHeader;
