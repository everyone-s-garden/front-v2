import {
  Box,
  Flex,
  Icon,
  Text,
  Button,
  useDisclosure,
  Link,
  Spinner,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AlertToast } from '@/components';
import {
  ChatIcon,
  CopyNumberIcon,
  HeartIcon,
  PhoneIcon,
  ReportIcon,
} from '@/assets/icons';
import Modal from '@/components/Modal/Modal';
import useClipboard from '@/hooks/useClipboard';
import { PATH } from '@/routes/constants';
import { useCreateGardenChatRoom } from '@/services/chat/query';
import { useLikeGarden } from '@/services/gardens/mutations';

interface BottomSectionProps {
  gardenInfo?: GardenDetail;
  refetch: () => void;
}

const BottomSection = ({ gardenInfo, refetch }: BottomSectionProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState<boolean | undefined>(undefined);
  const isGardenLiked = gardenInfo?.gardenLikeId === 0 ? false : true;
  const [liked, setLiked] = useState(isGardenLiked);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [isClickedCallInWeb, setIsClickedCallInWeb] = useState(false);

  const { isCopied, onCopy } = useClipboard();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { mutateLikeGarden } = useLikeGarden(
    liked,
    gardenInfo?.gardenId,
    setLiked,
  );
  const {
    mutate: createGardenChatRoom,
    data: newChatRoomData,
    isSuccess,
  } = useCreateGardenChatRoom();

  useEffect(() => {
    setLiked(isGardenLiked);
  }, [isGardenLiked]);

  useEffect(() => {
    const userAgent = navigator.userAgent;

    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent,
      );

    setIsMobile(isMobile);
  }, []);

  const handleClickCall = () => {
    if (!isMobile) setIsClickedCallInWeb(true);
    setTimeout(() => {
      setIsClickedCallInWeb(false);
    }, 3000);
  };

  const handleClickLike = () => {
    setLoading(true);
    if (liked)
      mutateLikeGarden({
        type: 'cancel',
        gardenLikeId: gardenInfo?.gardenLikeId,
      });
    else
      mutateLikeGarden({
        type: 'like',
        gardenLikeId: gardenInfo?.gardenLikeId,
      });

    setTimeout(() => {
      refetch();

      setTimeout(() => {
        setLoading(false);
      }, 150);
    }, 250);
  };

  const handleClickChat = () => {
    if (gardenInfo?.roomId === -1) {
      createGardenChatRoom({
        postId: gardenInfo?.gardenId,
        writerId: gardenInfo?.writerId,
      });
      if (isSuccess) {
        navigate(`/chat/${newChatRoomData.chatRoomId}`);
      }
    } else {
      navigate(`/chat/${gardenInfo?.roomId}`);
    }
  };

  const handleClickReport = () => {
    navigate(PATH.REPORT, {
      state: {
        from: pathname,
        name: 'garden',
        color: 'orange',
        reportId: gardenInfo?.gardenId,
      },
    });
  };

  const handleOnClick = () => {
    if (!gardenInfo?.openAPIResourceId) {
      onOpen();

      return;
    }

    if (ref.current) {
      ref.current.value = gardenInfo?.openAPIResourceId;
    }
    if (formRef.current) {
      formRef.current.action =
        'https://www.modunong.or.kr:449/home/kor/garden/parcel/view.do';
      formRef.current.target = '_blank';
      formRef.current.submit();
    }
  };

  return (
    <Box cursor="pointer" padding="0 30px 30px 30px">
      <Flex marginBottom="20px" alignItems="center" gap="6px">
        <Icon as={ReportIcon} />
        <Text
          fontSize="12px"
          color="gray.400"
          fontWeight="regular"
          onClick={handleClickReport}
          cursor={'pointer'}
        >
          신고하기
        </Text>
      </Flex>

      <Flex gap="15px">
        <Button
          w="100%"
          h="48px"
          flexShrink="1"
          bgColor="white"
          border="1px solid"
          borderColor={liked ? 'orange.500' : 'gray.100'}
          padding="14px"
          _hover={{}}
          _active={{}}
          onClick={handleClickLike}
          isLoading={loading}
          isDisabled={loading}
        >
          {loading ? (
            <Spinner size="sm" emptyColor="gray.200" color="green.500" />
          ) : (
            <>
              <Icon
                w="24px"
                h="24px"
                as={HeartIcon}
                fill={liked ? 'orange.500' : 'gray.300'}
                marginRight="6px"
              />
              <Text
                color={liked ? 'orange.500' : 'gray.300'}
                fontWeight="medium"
              >
                찜하기
              </Text>
            </>
          )}
        </Button>

        <Button
          color="white"
          padding="14px 52px"
          bgColor="green.500"
          flexShrink="1"
          w="100%"
          h="48px"
          _hover={{}}
          _active={{}}
          onClick={handleOnClick}
        >
          {gardenInfo?.openAPIResourceId ? '연락처 보기' : '신청하기'}
        </Button>
      </Flex>

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
            <Text fontWeight="semiBold">{gardenInfo?.contact}</Text>
            <Icon
              w="24px"
              h="24px"
              cursor="pointer"
              as={CopyNumberIcon}
              onClick={() => onCopy(gardenInfo?.contact ?? '')}
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
                href={`tel:${gardenInfo?.contact}`}
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

        <AlertToast show={isCopied} message="복사되었습니다." color="green" />
      </Modal>
      {gardenInfo?.openAPIResourceId && (
        <form
          ref={formRef}
          id="cmmnForm"
          name="cmmnForm"
          action="/home/kor/garden/parcel/index.do?menuPos=9"
          method="post"
        >
          <input id="tabPos" name="tabPos" type="hidden" value="C" />
          <input ref={ref} type="hidden" id="idx" name="idx" />
        </form>
      )}
    </Box>
  );
};

export default BottomSection;
