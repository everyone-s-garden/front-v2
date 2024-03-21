import { Box, Input, Text } from '@chakra-ui/react';
import { Meta, StoryObj } from '@storybook/react';
import { PropsWithChildren } from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { LocationIcon, ModalPlusIcon } from '@/assets/icons';
import Modal, { ModalProps } from './Modal';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  decorators: [withRouter],
} satisfies Meta<typeof Modal>;

export default meta;

export const 작물거래글쓰기: StoryObj<PropsWithChildren<ModalProps>> = {
  args: {
    showExitIcon: false,
    showButton: true,
    buttonContent: '등록하기',
    buttonColor: 'green',
    buttonDisabled: true,
    children: (
      <Box w="392px" h="calc(560px - 61px)">
        <Box
          w="100%"
          h="116px"
          padding="18px 20px 24px 20px"
          display="flex"
          flexDir="column"
          gap="16.5px"
          borderBottom="1px"
          borderColor="gray.100"
        >
          <Box position="relative" height="36px">
            <Box
              position="absolute"
              left="14px"
              top="50%"
              transform="translateY(-50%)"
              zIndex="5"
            >
              <ModalPlusIcon />
            </Box>
            <Input
              variant="unstyled"
              h="100%"
              paddingLeft="48px"
              border="0"
              background="gray.50"
              outline="none"
              placeholder="장소명을 입력하세요."
            />
          </Box>
          <Box display="flex" gap="5px" alignItems="center" h="20px">
            <LocationIcon />
            <Text>내 위치 지정</Text>
          </Box>
        </Box>
      </Box>
    ),
  },
};

export const 채팅거래완료: StoryObj<PropsWithChildren<ModalProps>> = {
  args: {
    showExitIcon: true,
    showButton: true,
    buttonContent: '후기 작성하기',
    buttonColor: 'orange',
    buttonDisabled: false,
    children: (
      <Box
        w="450px"
        h="calc(249px - 61px)"
        display="flex"
        justifyContent="center"
      >
        <Text
          marginTop="70px"
          marginBottom="51px"
          textAlign="center"
          fontSize="20px"
          lineHeight="30px"
          fontWeight="semibold"
        >
          존리 님과 <br /> 거래를 완료하셨나요?
        </Text>
      </Box>
    ),
  },
};

export const 마이페이지게시글삭제: StoryObj<PropsWithChildren<ModalProps>> = {
  args: {
    showExitIcon: true,
    showButton: true,
    buttonContent: '삭제하기',
    buttonColor: 'green',
    buttonDisabled: false,
    children: (
      <Box
        w="470px"
        h="calc(242px - 61px)"
        display="flex"
        justifyContent="center"
      >
        <Text
          marginTop="70px"
          marginBottom="51px"
          textAlign="center"
          fontSize="18px"
          lineHeight="30px"
          fontWeight="semibold"
        >
          게시글을 <br /> 삭제하시겠습니까?
        </Text>
      </Box>
    ),
  },
};
