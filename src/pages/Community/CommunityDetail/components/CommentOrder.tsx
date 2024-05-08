import {
  Button,
  Center,
  Icon,
  Show,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import {
  BottomMenu,
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownTrigger,
} from '@/components';
import { ArrowDownIcon } from '@/assets/icons';
import { COMMENT } from '../../constants';
import { CommentOrderByOptions } from '../../types';
import { useWhisperStore } from '@/stores/whisperStore';

const CommentOrder = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const orderBy = useWhisperStore((state) => state.commentsParam.orderBy);
  const setOrderBy = useWhisperStore((state) => state.setCommentsOrderBy);

  const handleClickOrder = (order: CommentOrderByOptions) => {
    setOrderBy(order);
    onClose();
  };

  return (
    <>
      <Show above="tablet">
        <Dropdown colorScheme="orange" variant="none">
          <DropdownTrigger
            as={Button}
            rightIcon={
              <Icon as={ArrowDownIcon} w={'18px'} h={'18px'} stroke={'black'} />
            }
            bg={'none'}
            _hover={{ bg: 'none' }}
            _active={{ bg: 'none' }}
            p={0}
            w={'90px'}
            h={'fit-content'}
          >
            <Text fontWeight={'medium'} textAlign={'right'}>
              {orderBy ? COMMENT.ORDER[orderBy] : '정렬'}
            </Text>
          </DropdownTrigger>

          <DropdownList minW={'fit-content'}>
            {Object.values(COMMENT.ORDER).map((order) => (
              <DropdownItem
                key={order}
                px={'12px'}
                onClick={() => handleClickOrder(COMMENT.ORDER_KO[order])}
              >
                <Text
                  color={'sub'}
                  textAlign={'center'}
                  w={'100%'}
                  fontWeight={'medium'}
                >
                  {order}
                </Text>
              </DropdownItem>
            ))}
          </DropdownList>
        </Dropdown>
      </Show>
      <Show below="tablet">
        <Button
          rightIcon={
            <Icon as={ArrowDownIcon} w={'12px'} h={'12px'} stroke={'black'} />
          }
          h={'fit-content'}
          bg={'none'}
          _hover={{ bg: 'none' }}
          _active={{ bg: 'none' }}
          p={0}
          onClick={onOpen}
        >
          <Text fontSize={'14px'} fontWeight={'medium'}>
            정렬
          </Text>
        </Button>
        <BottomMenu isOpen={isOpen} onClose={onClose}>
          {Object.values(COMMENT.ORDER).map((order) => (
            <Center
              as={Button}
              key={order}
              variant="unstyled"
              _first={{ borderTopRadius: 20, borderBottomRadius: 0 }}
              _notFirst={{ borderRadius: 0 }}
              _hover={{ bg: 'orange.100' }}
              onClick={() => handleClickOrder(COMMENT.ORDER_KO[order])}
              h={'60px'}
            >
              {order}
            </Center>
          ))}
        </BottomMenu>
      </Show>
    </>
  );
};

export default CommentOrder;
