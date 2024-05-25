import {
  Box,
  Flex,
  ModalCloseButton,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';
import {
  ArrowDownIcon,
  HeadphonesIcon,
  TextBubbleGreenIcon,
  UserFeedBackSmileIcon,
} from '@/assets/icons';
import { useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownTrigger,
  ImageSelector,
  Modal,
} from '@/components';
import { userFeedBackItem } from '../constants';
// interface UserFeedBackProps {}

const UserFeedBack = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inquireType, setInquireType] = useState({
    label: '문의 유형',
    key: 'no-key',
    value: 0,
  });
  const breakPoints = {
    320: { slidesPerView: 1, spaceBetween: 10 },
    768: { slidesPerView: 1, spaceBetween: 10 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
  };

  const size = {
    mobile: 70,
    tablet: 70,
    desktop: 70,
  };
  return (
    <>
      <Flex
        display={{ mobile: 'none', tablet: 'flex' }}
        cursor="pointer"
        mt="20px"
        bg="green.100"
        borderRadius="11px"
        w="204px"
        h="65px"
        align="center"
        justify="center"
        border="1px"
        borderColor="green.500"
        as="button"
        onClick={() => setModalOpen(true)}
      >
        <Box mr="6.03px" aria-label="유저의 소리함">
          <Text fontWeight="medium" fontSize="12px">
            제한사항이 있나요?
          </Text>
          <Text fontWeight="semiBold" fontSize="16px">
            유저의 소리함
          </Text>
        </Box>
        <Flex>
          <TextBubbleGreenIcon />
          <HeadphonesIcon />
        </Flex>
      </Flex>
      <Modal
        showExitIcon={false}
        isOpen={modalOpen}
        showButton={true}
        onClose={() => setModalOpen(false)}
        buttonContent="등록하기"
        buttonColor="green"
      >
        <Box w="340px" h="518px" px="16px" pt="26px" pb="34px">
          <Flex align="center" mb="24px" justify="space-between">
            <Text fontWeight="semiBold" fontSize="18px">
              유저의 소리함
            </Text>

            <ModalCloseButton __css={{ position: 'relative' }} />
          </Flex>
          <Flex align="center" justify="center" mb="20px">
            <UserFeedBackSmileIcon />
            <Box
              w="216px"
              h="83px"
              bg="green.100"
              ml="16px"
              px="19px"
              py="10px"
              fontSize="14px"
              borderRadius="10px"
            >
              안녕하세요. 모두의 텃밭입니다. 의견 및 제안사항, 오류가 있다면
              남겨주세요.
            </Box>
          </Flex>
          <Dropdown>
            <DropdownTrigger
              w="full"
              borderRadius="10px"
              border="1px solid"
              borderColor="green.500"
              mb="20px"
            >
              <Flex
                px="16px"
                pt="9px"
                pb="10px"
                justify="space-between"
                align="center"
              >
                <Text fontWeight="medium" fontSize="14px">
                  {inquireType.label}
                </Text>
                <ArrowDownIcon />
              </Flex>
            </DropdownTrigger>
            <DropdownList w="308px" borderRadius="8px">
              {userFeedBackItem.map((item) => (
                <DropdownItem
                  key={item.key}
                  p="8px"
                  pl="16px"
                  fontSize="12px"
                  fontWeight="medium"
                  onClick={() => setInquireType(item)}
                >
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownList>
          </Dropdown>
          <Textarea
            placeholder="문의 사항을 입력해주세요."
            resize="none"
            h="105px"
            fontSize="14px"
            mb="20px"
          />
          <ImageSelector color="green" breakPoints={breakPoints} size={size} />
        </Box>
      </Modal>
    </>
  );
};

export default UserFeedBack;
