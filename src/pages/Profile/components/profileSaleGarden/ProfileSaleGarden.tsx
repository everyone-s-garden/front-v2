import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Link,
  Show,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AlertToast, Modal } from '@/components';
import { ChatIcon, CopyNumberIcon, PhoneIcon } from '@/assets/icons';
import ProfileIndividualSaleGarden from './ProfileIndividualSaleGarden';
import useClipboard from '@/hooks/useClipboard';
import { useCreateGardenChatRoom } from '@/services/chat/query';

interface ProfileSaleGardenProps {
  otherGardensForSale: GardenForSale[] | undefined;
  refetchGardensForSale: () => void;
}

const ProfileSaleGarden = ({
  otherGardensForSale,
  refetchGardensForSale,
}: ProfileSaleGardenProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isClickedCallInWeb, setIsClickedCallInWeb] = useState(false);
  const { userId } = useParams();
  const { isCopied, onCopy } = useClipboard();
  const navigate = useNavigate();
  const [contact, setContact] = useState('');
  const [gardenId, setGardenId] = useState<number | null>(null);
  const [chatRoomId, setChatRoomId] = useState<number>(-1);

  useEffect(() => {
    const userAgent = navigator.userAgent;

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent,
      );

    setIsMobile(isMobile);
  }, []);

  const {
    mutate: createGardenChatRoom,
    data: newChatRoomData,
    isSuccess,
  } = useCreateGardenChatRoom();

  const handleClickCall = () => {
    if (!isMobile) setIsClickedCallInWeb(true);
    setTimeout(() => {
      setIsClickedCallInWeb(false);
    }, 3000);
  };

  const handleClickChat = () => {
    if (gardenId && userId && chatRoomId === -1) {
      createGardenChatRoom({
        postId: gardenId,
        writerId: Number(userId),
      });
      if (isSuccess) {
        navigate(`/chat/${newChatRoomData.chatRoomId}`);
      }
    } else {
      navigate(`/chat/${chatRoomId}`);
    }
  };

  return (
    <Box mb={{ tablet: '164px' }}>
      <Show below="tablet">
        <Flex flexDir="column" gap="36px">
          {otherGardensForSale?.map((el, i) => (
            <ProfileIndividualSaleGarden
              garden={el}
              key={i}
              refetchGardensForSale={refetchGardensForSale}
              onOpen={onOpen}
              setContact={setContact}
              setGardenId={setGardenId}
              setChatRoomId={setChatRoomId}
            />
          ))}
        </Flex>
      </Show>

      <Show above="tablet">
        <Grid
          gridTemplateColumns={{ tablet: '1fr 1fr', desktop: '1fr 1fr 1fr' }}
          gridRowGap="52px"
          gridColumnGap="48px"
          flexDir="column"
          gap="45px"
        >
          {otherGardensForSale?.map((el, i) => (
            <ProfileIndividualSaleGarden
              garden={el}
              key={i}
              refetchGardensForSale={refetchGardensForSale}
              onOpen={onOpen}
              setContact={setContact}
              setGardenId={setGardenId}
              setChatRoomId={setChatRoomId}
            />
          ))}
        </Grid>
      </Show>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        showExitIcon={true}
        showButton={false}
      >
        <Box w="341px" h="232px" padding="20px">
          <Text fontSize="18px" fontWeight="semiBold" marginBottom="20px">
            문의하기
          </Text>

          <Flex
            padding="18px 20px"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="9px"
            justifyContent="space-between"
            marginBottom="12px"
          >
            <Text fontWeight="semiBold">{contact}</Text>
            <Icon
              w="24px"
              h="24px"
              cursor="pointer"
              as={CopyNumberIcon}
              onClick={() => onCopy(contact)}
            />
          </Flex>
          <Flex gap="17.5px">
            {isMobile ? (
              <Link
                display="flex"
                w="50%"
                h="50px"
                gap="14px"
                justifyContent="center"
                alignItems="center"
                bgColor="green.100"
                paddingLeft="16px"
                paddingRight="24px"
                borderRadius="9px"
                cursor="pointer"
                href={`tel:${contact}`}
                isExternal
              >
                <Icon as={PhoneIcon} w="24px" h="24px" />
                <Text fontWeight="semiBold">연락하기</Text>
              </Link>
            ) : (
              <Button
                display="flex"
                w="50%"
                h="50px"
                gap="14px"
                justifyContent="center"
                alignItems="center"
                bgColor="green.100"
                paddingLeft="16px"
                paddingRight="24px"
                borderRadius="9px"
                cursor="pointer"
                onClick={handleClickCall}
                _hover={{}}
                _active={{}}
              >
                <Icon as={PhoneIcon} w="24px" h="24px" />
                <Text fontWeight="semiBold">연락하기</Text>
              </Button>
            )}
            <Flex
              w="50%"
              h="50px"
              gap="14px"
              justifyContent="center"
              alignItems="center"
              bgColor="green.100"
              paddingLeft="16px"
              paddingRight="24px"
              borderRadius="9px"
              cursor="pointer"
              onClick={handleClickChat}
            >
              <Icon as={ChatIcon} w="24px" h="24px" />
              <Text fontWeight="semiBold">채팅하기</Text>
            </Flex>
          </Flex>
          <Text
            fontSize="12px"
            fontWeight="regular"
            color={isClickedCallInWeb ? '#D80C18' : 'gray.400'}
            transition="color 0.3s ease"
            textAlign="center"
            marginTop="12px"
          >
            연락하기는 모바일에서만 가능해요.
          </Text>
        </Box>

        <AlertToast show={isCopied} message="복사되었습니다." />
      </Modal>
    </Box>
  );
};

export default ProfileSaleGarden;
