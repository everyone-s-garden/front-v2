import {
  Box,
  Button,
  Flex,
  Hide,
  Icon,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { LocationPrimaryIcon, ThreeDotsMenuIcon } from '@/assets/icons';
import MenuButton from '@/pages/MyPage/components/MenuButton';
import { BottomMenu } from '@/components';
import { useState } from 'react';
import dayjs from 'dayjs';

interface ProfileGardenFooterProps {
  garden: ManagedGarden;
  handleDelete: (id: number) => void;
  handleEdit: (el: Object) => void;
}

const ProfileGardenFooter = ({
  garden,
  handleDelete,
  handleEdit,
}: ProfileGardenFooterProps) => {
  // const monthsUsing = dayjs(garden.useEndDate).diff(
  //   dayjs(garden.useStartDate),
  //   'month',
  // );
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [modalOpen, setModalOpen] = useState(false);

  const onEditClick = () => {
    handleEdit(garden);
    onClose();
  };
  const confirmModalOpen = () => {
    setModalOpen(true);
    onClose();
  };
  const onPressDelete = () => {
    handleDelete(garden.myManagedGardenId);
    setModalOpen(false);
  };

  const formattedDate = dayjs(garden.createdAt, 'YYYY.MM.DD').format(
    'MM월 DD일',
  );
  return (
    <Flex
      alignItems="center"
      borderBottomRadius="10px"
      h="60px"
      bgColor="gray.50"
      gap="12px"
      pl="20px"
    >
      <Text fontSize={{ mobile: '16px', tablet: '18px' }} fontWeight="medium">
        {formattedDate}
      </Text>
      <Text fontSize={{ mobile: '16px', tablet: '18px' }} fontWeight="medium">
        /
      </Text>
      <Icon as={LocationPrimaryIcon} w="20px" h="20px" />

      <Text fontSize={{ mobile: '16px', tablet: '18px' }} fontWeight="medium">
        {garden.myManagedGardenName}
      </Text>

      <MenuButton
        itemId={garden.myManagedGardenId}
        ml="auto"
        mr="15px"
        handleDelete={() => handleDelete(garden.myManagedGardenId)}
        handleEdit={() => handleEdit(garden)}
      />
      <Hide above="tablet">
        <Box ml="auto" mr="15px" onClick={onOpen}>
          <ThreeDotsMenuIcon />
          <BottomMenu isOpen={isOpen} onClose={onClose}>
            <Button
              h="60px"
              bg="green.100"
              display={'flex'}
              justifyContent={'flex-start'}
              onClick={onEditClick}
            >
              <Text fontSize={'16px'} fontWeight={'medium'}>
                게시글 수정
              </Text>
            </Button>
            <Button
              h="60px"
              display={'flex'}
              justifyContent={'flex-start'}
              onClick={confirmModalOpen}
            >
              <Text fontSize={'16px'} fontWeight={'medium'}>
                삭제하기
              </Text>
            </Button>
          </BottomMenu>
        </Box>
        <Modal
          onClose={() => setModalOpen(false)}
          isOpen={modalOpen}
          isCentered
        >
          <ModalOverlay />
          <ModalContent w="330px" h="194px">
            <Flex w="100%" h="100%" justify={'center'} align={'center'}>
              <Text
                fontSize={'18px'}
                fontWeight={'semiBold'}
                textAlign="center"
              >
                선택한 글을
                <Text>삭제하시겠습니까?</Text>
              </Text>
            </Flex>
            <Flex>
              <Button
                bg="transparent"
                flex={1}
                h={'fit-content'}
                fontWeight={'bold'}
                fontSize={'17px'}
                borderRadius={0}
                py="14.5px"
                onClick={() => setModalOpen(false)}
              >
                취소
              </Button>
              <Button
                bg="transparent"
                flex={1}
                borderRadius={0}
                h={'fit-content'}
                fontWeight={'bold'}
                fontSize={'17px'}
                color="green.500"
                py="14.5px"
                onClick={onPressDelete}
              >
                삭제
              </Button>
            </Flex>
          </ModalContent>
        </Modal>
      </Hide>
    </Flex>
  );
};

export default ProfileGardenFooter;
