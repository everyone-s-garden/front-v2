import { Box, Flex, ModalCloseButton, Text, Textarea } from '@chakra-ui/react';
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
import { userFeedBackItem } from '../constants';
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
  label: '문의 유형',
  key: 'no-key',
  value: 'default',
};

const UserFeedbackModal = () => {
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
    if (feedbackType.value === 'default' || feedbackText.length < 8) {
      setErrorState(true);

      return false;
    }

    return true;
  };
  const onSubmit = async () => {
    if (!validateForm()) return;

    const formData = new FormData();

    images.forEach(({ file }) => {
      formData.append('images', file);
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
    } else {
      alert('피드백 전송 실패');
    }
  };

  const isDropdownError = errorState && feedbackType.value === 'default';
  const isTextareaError = errorState && feedbackText.length < 8;

  return (
    <Modal
      showExitIcon={false}
      isOpen={modalOpen}
      showButton={true}
      onClose={closeModal}
      buttonContent="등록하기"
      buttonColor="green"
      handleClickButton={onSubmit}
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
            border={isDropdownError ? '2px solid' : '1px solid'}
            borderColor={isDropdownError ? 'red.300' : 'green.500'}
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
                {feedbackType.label}
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
                onClick={() => setFeedbackType(item)}
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
          onChange={(e) => setFeedbackText(e.currentTarget.value)}
          border={isTextareaError ? '2px solid' : '1px solid'}
          borderColor={isTextareaError ? 'red.300' : 'green.500'}
        />
        <ImageSelector
          color="green"
          breakPoints={breakPoints}
          size={size}
          showArrow={false}
        />
      </Box>
    </Modal>
  );
};

export default UserFeedbackModal;
