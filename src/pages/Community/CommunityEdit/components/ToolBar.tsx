import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Icon,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { EditorState } from 'draft-js';
import { Dispatch, SetStateAction } from 'react';
import { useFormContext } from 'react-hook-form';
import {
  BottomMenu,
  Dropdown,
  DropdownItem,
  DropdownList,
  DropdownTrigger,
} from '@/components';
import {
  ArrowDownIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from '@/assets/icons';
import { POST } from '../../constants';
import { BLOCK_LABEL, INLINE_STYLE, TEXT_BLOCK_STYLE } from '../constants';
import BlockUtils from '../utils/BlockUtils';
import inlineUtils from '../utils/InlineUtils';

const ToolBar = ({
  value,
  onChange,
}: {
  value: EditorState;
  onChange: Dispatch<SetStateAction<EditorState>>;
}) => {
  const { getValues, setValue, watch } = useFormContext();

  watch('postType');

  return (
    <Center
      hideBelow={'tablet'}
      borderY={'1px solid'}
      borderColor={'gray.100'}
      h={'64px'}
      flexShrink={0}
    >
      <Dropdown colorScheme="orange" variant={'none'}>
        <DropdownTrigger
          as={Button}
          rightIcon={
            <Icon as={ArrowDownIcon} w={'12px'} h={'12px'} stroke={'black'} />
          }
          bg={'none'}
          _hover={{ bg: 'none' }}
          _active={{ bg: 'none' }}
          px={'36px'}
        >
          <Text>{getValues('postType') ?? '주제'}</Text>
        </DropdownTrigger>
        <DropdownList
          minW={getValues('postType')?.length > 3 ? '140px' : '120px'}
        >
          {Object.values(POST.TYPE).map((type) => (
            <DropdownItem
              key={type}
              height={'48px'}
              onClick={() => {
                setValue('postType', type);
              }}
            >
              <Text w={'100%'} textAlign={'center'} fontWeight={'medium'}>
                {type}
              </Text>
            </DropdownItem>
          ))}
        </DropdownList>
      </Dropdown>
      <Divider orientation="vertical" h={'20px'} borderColor={'gray.400'} />
      <Dropdown colorScheme="orange" variant={'none'}>
        <DropdownTrigger
          as={Button}
          rightIcon={
            <Icon as={ArrowDownIcon} w={'12px'} h={'12px'} stroke={'black'} />
          }
          bg={'none'}
          _hover={{ bg: 'none' }}
          _active={{ bg: 'none' }}
          px={'36px'}
        >
          {BLOCK_LABEL[BlockUtils.getBlockStyles(value)] ?? '본문'}
        </DropdownTrigger>
        <DropdownList minW={'120px'}>
          {TEXT_BLOCK_STYLE.map(({ label, name, styles }) => (
            <DropdownItem
              key={name}
              height={'48px'}
              onClick={(e) => {
                e.preventDefault();
                BlockUtils.setBlockStyles({
                  editorState: value,
                  setEditorState: onChange,
                  type: name,
                });
              }}
            >
              <Text w={'100%'} textAlign={'center'} {...styles}>
                {label}
              </Text>
            </DropdownItem>
          ))}
        </DropdownList>
      </Dropdown>
      <Divider orientation="vertical" h={'20px'} borderColor={'gray.400'} />
      <Flex align={'center'} gap={'5px'} px={'36px'}>
        {INLINE_STYLE.map(({ label, name, Icon }) => (
          <IconButton
            key={name}
            aria-label={label}
            icon={<Icon />}
            minW={'40px'}
            variant={'unstyled'}
            display={'flex'}
            onClick={() => {
              inlineUtils.setInlineStyles({
                editorState: value,
                setEditorState: onChange,
                type: name,
              });
            }}
            bg={
              inlineUtils.getInlineStyles(value).includes(name)
                ? 'orange.100'
                : 'none'
            }
          />
        ))}
      </Flex>
    </Center>
  );
};

const MobileToolBar = ({
  value,
  onChange,
}: {
  value: EditorState;
  onChange: Dispatch<SetStateAction<EditorState>>;
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Center
      hideFrom={'tablet'}
      position={'absolute'}
      bottom={'60px'}
      h={'68px'}
      w={'100%'}
      borderTop={'1px solid'}
      borderColor={'gray.100'}
    >
      <Button
        rightIcon={
          <Icon as={ArrowDownIcon} w={'12px'} h={'12px'} stroke={'black'} />
        }
        bg={'none'}
        _hover={{ bg: 'none' }}
        _active={{ bg: 'none' }}
        px={'30px'}
        onClick={onOpen}
      >
        <Text flexShrink={0}>본문</Text>
      </Button>
      <BottomMenu isOpen={isOpen} onClose={onClose}>
        <Center
          as={Button}
          variant="unstyled"
          _hover={{ bg: 'orange.100' }}
          fontWeight={'medium'}
          h={'60px'}
          borderTopRadius={20}
          borderBottomRadius={0}
          borderBottom={'1px solid'}
          borderColor={'gray.100'}
          onClick={onClose}
        >
          본문
        </Center>
        <Center
          as={Button}
          variant="unstyled"
          _hover={{ bg: 'orange.100' }}
          fontWeight={'bold'}
          h={'60px'}
          borderRadius={0}
          fontSize={'20'}
          borderBottom={'1px solid'}
          borderColor={'gray.100'}
          onClick={onClose}
        >
          제목 1
        </Center>
        <Center
          as={Button}
          variant="unstyled"
          _hover={{ bg: 'orange.100' }}
          fontWeight={'semiBold'}
          h={'60px'}
          borderRadius={0}
          fontSize={'18'}
          borderBottom={'1px solid'}
          borderColor={'gray.100'}
          onClick={onClose}
        >
          제목 2
        </Center>
        <Center
          as={Button}
          variant="unstyled"
          _hover={{ bg: 'orange.100' }}
          fontWeight={'medium'}
          h={'60px'}
          borderRadius={0}
          fontSize={'14'}
          onClick={onClose}
        >
          서브
        </Center>
      </BottomMenu>
      <Divider orientation="vertical" h={'20px'} borderColor={'gray.200'} />
      <Flex align={'center'} px={'30px'}>
        <IconButton
          aria-label="볼드"
          icon={<BoldIcon />}
          bg={'none'}
          _hover={{ bg: 'none' }}
          _active={{ bg: 'none' }}
          onClick={() => {
            inlineUtils.setInlineStyles({
              editorState: value,
              setEditorState: onChange,
              type: 'BOLD',
            });
          }}
        />
        <IconButton
          aria-label="이탤릭"
          icon={<ItalicIcon />}
          bg={'none'}
          _hover={{ bg: 'none' }}
          _active={{ bg: 'none' }}
          onClick={() => {
            inlineUtils.setInlineStyles({
              editorState: value,
              setEditorState: onChange,
              type: 'ITALIC',
            });
          }}
        />
        <IconButton
          aria-label="언더라인"
          icon={<UnderlineIcon />}
          bg={'none'}
          _hover={{ bg: 'none' }}
          _active={{ bg: 'none' }}
          onClick={() => {
            inlineUtils.setInlineStyles({
              editorState: value,
              setEditorState: onChange,
              type: 'UNDERLINE',
            });
          }}
        />
      </Flex>
    </Center>
  );
};

const PostType = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box hideFrom={'tablet'} mt={'18px'} mb={'10px'}>
      <Button
        rightIcon={
          <Icon as={ArrowDownIcon} stroke={'black'} w={'12px'} h={'12px'} />
        }
        bg={'orange.100'}
        _hover={{ bg: 'orange.100' }}
        _active={{ bg: 'orange.100' }}
        borderRadius={8}
        onClick={onOpen}
        w={'70px'}
        h={'30px'}
        p={0}
      >
        <Text fontWeight={'medium'}>주제</Text>
      </Button>

      <BottomMenu isOpen={isOpen} onClose={onClose}>
        {Object.values(POST.TYPE).map((type) => (
          <Center
            as={Button}
            key={type}
            variant="unstyled"
            _hover={{ bg: 'orange.100' }}
            onClick={onClose}
            h={'60px'}
            fontWeight={'medium'}
            _first={{ borderTopRadius: 20, borderBottomRadius: 0 }}
            _notFirst={{
              borderRadius: 0,
              borderTop: '1px solid',
              borderColor: 'gray.100',
            }}
          >
            {type}
          </Center>
        ))}
      </BottomMenu>
    </Box>
  );
};

export { ToolBar, MobileToolBar, PostType };
