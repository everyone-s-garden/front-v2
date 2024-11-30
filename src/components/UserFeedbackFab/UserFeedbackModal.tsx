import {
  Box,
  Flex,
  Icon,
  ModalCloseButton,
  Text,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownTrigger,
  ImageSelector,
  Modal,
} from '@/components';
import { ArrowDownIcon, UserFeedBackSmileIcon } from '@/assets/icons';
import { userFeedBackItem } from '../../pages/MyPage/constants/constants';
import { postUserFeedback } from '@/services/mypage/api';
import { useImageStore } from '@/stores/imageStore';
import { userFeedbackFabStore } from '@/stores/userFeedbackFabStore';

const breakPoints = {
  320: { slidesPerView: 3, spaceBetween: 5 },
  768: { slidesPerView: 3, spaceBetween: 5 },
  1024: { slidesPerView: 3, spaceBetween: 5 },
};

const size = {
  mobile: 70,
  tablet: 70,
  desktop: 70,
};
const initialFeedbackType = {
  label: '의견 유형',
  key: 'no-key',
  value: 'default',
};

const UserFeedbackModal = () => {
  const {
    isOpen: confirmModalIsOpen,
    onClose: confirmModalOnClose,
    onOpen: confirmModalOnOpen,
  } = useDisclosure();
  const { modalOpen, setModalOpen } = userFeedbackFabStore();
  const [feedbackType, setFeedbackType] = useState(initialFeedbackType);
  const images = useImageStore((state) => state.images);
  const setImages = useImageStore((state) => state.setImages);
  const [feedbackText, setFeedbackText] = useState('');
  const [errorState, setErrorState] = useState(false);

  const closeModal = () => {
    setModalOpen();
    setFeedbackType(initialFeedbackType);
    setImages([]);
    setErrorState(false);
  };

  const validateForm = () => {
    if (
      feedbackType.value === 'default' ||
      feedbackText.length < 8 ||
      feedbackText.length > 255
    ) {
      setErrorState(true);

      return false;
    }

    return true;
  };
  const onSubmit = async () => {
    if (!validateForm()) return;

    const formData = new FormData();

    images.forEach((image) => {
      if (typeof image !== 'string') {
        formData.append('images', image.file);
      }
    });

    const jsonBlob = new Blob(
      [
        JSON.stringify({
          content: feedbackText,
          feedbackType: feedbackType.value,
        }),
      ],
      {
        type: 'application/json',
      },
    );
    formData.append('texts', jsonBlob);

    const res_status = await postUserFeedback(formData);
    if (res_status === 201) {
      closeModal();
      confirmModalOnOpen();
    } else {
      alert('피드백 전송 실패');
    }
  };

  const isDropdownError = errorState && feedbackType.value === 'default';
  const isTextareaMinError = errorState && feedbackText.length < 8;
  const isTextareaMaxError = errorState && feedbackText.length > 255;

  return (
    <>
      <Modal
        showExitIcon={false}
        isOpen={modalOpen}
        showButton={true}
        onClose={closeModal}
        buttonContent="등록하기"
        buttonDisabled={
          feedbackType.value === 'default' ||
          feedbackText.length < 8 ||
          feedbackText.length > 255
        }
        handleClickButton={onSubmit}
      >
        <Flex
          flexDir="column"
          gap="20px"
          w="340px"
          maxH="518px"
          px="16px"
          pt="26px"
          pb="34px"
        >
          <Flex align="center" mb="4px" justify="space-between">
            <Text fontWeight="semiBold" fontSize="18px">
              유저의 소리함
            </Text>

            <ModalCloseButton __css={{ position: 'relative' }} />
          </Flex>
          <Flex align="center" justify="center">
            <UserFeedBackSmileIcon />
            <Box
              w="216px"
              h="83px"
              bg="gray.50"
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
              border={isDropdownError ? '2px solid' : '1px solid'}
              borderColor={isDropdownError ? 'red.300' : 'gray.100'}
              _expanded={{ borderColor: 'green.500' }}
            >
              <Flex
                px="16px"
                pt="9px"
                pb="10px"
                justify="space-between"
                align="center"
              >
                <Text
                  fontWeight="medium"
                  fontSize="14px"
                  color={feedbackType.value === 'default' ? 'sub' : 'black'}
                >
                  {feedbackType.label}
                </Text>
                <Icon as={ArrowDownIcon} />
              </Flex>
            </DropdownTrigger>
            <DropdownList w="308px" borderRadius="10px" borderColor="gray.100">
              {userFeedBackItem.map((item) => (
                <DropdownItem
                  key={item.key}
                  py="15px"
                  pl="16px"
                  fontSize="14px"
                  fontWeight="medium"
                  onClick={() => setFeedbackType(item)}
                  borderBottomColor="gray.100 !important"
                >
                  {item.label}
                </DropdownItem>
              ))}
            </DropdownList>
          </Dropdown>
          <Textarea
            variant="unstyled"
            p="12px"
            placeholder="문의 사항을 입력해주세요."
            resize="none"
            h="105px"
            fontSize="14px"
            onChange={(e) => setFeedbackText(e.currentTarget.value)}
            border={
              isTextareaMinError || isTextareaMaxError
                ? '2px solid'
                : '1px solid'
            }
            borderColor={
              isTextareaMinError || isTextareaMaxError ? 'red.300' : 'gray.100'
            }
            _placeholder={{ color: 'gray.300' }}
            _focus={{ borderColor: 'green.500' }}
          />
          {isTextareaMinError && (
            <Text fontSize="12px" mt="-18px" color="red.300">
              8자 이상 입력해주세요.
            </Text>
          )}
          {isTextareaMaxError && (
            <Text fontSize="12px" mt="-18px" color="red.300">
              255자 이하로 입력해주세요.
            </Text>
          )}
          <ImageSelector
            breakPoints={breakPoints}
            size={size}
            showArrow={false}
            fontSize={12}
          />
        </Flex>
      </Modal>
      <Modal
        showButton={false}
        showExitIcon={true}
        isOpen={confirmModalIsOpen}
        onClose={confirmModalOnClose}
      >
        <Flex w="350px" h="109px" justify="center" align="center">
          유저의 소리함에 전달되었습니다.
        </Flex>
      </Modal>
    </>
  );
};

export default UserFeedbackModal;
