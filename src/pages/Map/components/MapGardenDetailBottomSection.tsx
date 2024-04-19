import {
  Box,
  Flex,
  Icon,
  Text,
  Button,
  useDisclosure,
  chakra,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  ChatIcon,
  CopyNumberIcon,
  HeartIcon,
  PhoneIcon,
  ReportIcon,
} from '@/assets/icons';
import Modal from '@/components/Modal/Modal';

interface MapGardenDetailBottomSectionProps {
  garden: GardenDetail;
}

const CopyBox = chakra(motion.div);

const MapGardenDetailBottomSection = ({
  garden,
}: MapGardenDetailBottomSectionProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [copied, setCopied] = useState(false);

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (e) {
      alert('복사에 실패하였습니다');
    }
  };

  return (
    <Box marginTop="40px" cursor="pointer">
      <Flex marginBottom="20px" alignItems="center" gap="6px">
        <Icon as={ReportIcon} />
        <Text fontSize="12px" color="gray.400" fontWeight="regular">
          신고하기
        </Text>
      </Flex>

      <Flex w="fit-content" margin="0 auto" gap="14px">
        <Button
          border="1px solid"
          borderColor="gray.100"
          padding="14px"
          bgColor="white"
          _hover={{}}
          _active={{}}
        >
          <Icon
            w="24px"
            h="24px"
            as={HeartIcon}
            fill="gray.300"
            marginRight="6px"
          />
          <Text color="gray.300" fontWeight="medium">
            찜하기
          </Text>
        </Button>
        <Button
          color="white"
          padding="14px 52px"
          bgColor="green.500"
          _hover={{}}
          _active={{}}
          onClick={onOpen}
        >
          신청하기
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
            <Text fontWeight="semiBold">{garden.contact}</Text>
            <Icon
              w="24px"
              h="24px"
              cursor="pointer"
              as={CopyNumberIcon}
              onClick={() => handleCopyClipBoard(garden.contact)}
            />
          </Flex>
          <Flex gap="17.5px">
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
            >
              <Icon as={PhoneIcon} w="24px" h="24px" />
              <Text fontWeight="semiBold">연락하기</Text>
            </Flex>
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
            >
              <Icon as={ChatIcon} w="24px" h="24px" />
              <Text fontWeight="semiBold">채팅하기</Text>
            </Flex>
          </Flex>
          <Text
            fontSize="12px"
            fontWeight="regular"
            color="gray.400"
            textAlign="center"
            marginTop="12px"
          >
            연락하기는 모바일에서만 가능해요.
          </Text>
        </Box>

        <AnimatePresence>
          {copied && (
            <CopyBox
              pos="absolute"
              top="260px"
              left="50%"
              w="195px"
              h="48px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgColor="green.500"
              color="white"
              fontSize="15px"
              fontWeight="medium"
              borderRadius="9px"
              transform="-50%"
              initial={{ opacity: 0, x: '-50%', scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
            >
              복사 되었습니다.
            </CopyBox>
          )}
        </AnimatePresence>
      </Modal>
    </Box>
  );
};

export default MapGardenDetailBottomSection;
