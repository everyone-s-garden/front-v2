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
import { ArrowDownIcon } from '@/assets/icons';
import { POST } from '../../constants';
import { BLOCK_LABEL, INLINE_STYLE, TEXT_BLOCK_STYLE } from '../constants';
import { Post } from '../schema';
import BlockUtils from '../utils/BlockUtils';
import inlineUtils from '../utils/InlineUtils';

const ToolBar = ({
  value,
  onChange,
}: {
  value: EditorState;
  onChange: Dispatch<SetStateAction<EditorState>>;
}) => {
  const {
    getValues,
    setValue,
    watch,
    formState: { errors },
    clearErrors,
  } = useFormContext<Post>();

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
            <Icon
              as={ArrowDownIcon}
              w={'12px'}
              h={'12px'}
              stroke={errors.postType?.message ? 'error' : 'black'}
            />
          }
          bg={'none'}
          _hover={{ bg: 'none' }}
          _active={{ bg: 'none' }}
          px={'36px'}
        >
          <Text color={errors.postType?.message ? 'error' : 'black'}>
            {getValues('postType') ?? '주제'}
          </Text>
        </DropdownTrigger>
        <DropdownList
          minW={getValues('postType')?.length > 3 ? '140px' : '120px'}
        >
          {Object.values(POST.TYPE).map((type) => (
            <DropdownItem
              key={type}
              height={'48px'}
              onClick={() => {
                clearErrors('postType');
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
              <Text
                w={'100%'}
                fontWeight={'medium'}
                textAlign={'center'}
                {...styles}
              >
                {label}
              </Text>
            </DropdownItem>
          ))}
        </DropdownList>
      </Dropdown>
      <Divider orientation="vertical" h={'20px'} borderColor={'gray.400'} />
      <Flex align={'center'} gap={'34px'} px={'36px'}>
        {INLINE_STYLE.map(({ label, name, Icon }) => (
          <IconButton
            key={name}
            aria-label={label}
            icon={<Icon />}
            minW={'28px'}
            h={'28px'}
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
      position={'fixed'}
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
        gap={'2px'}
      >
        <Text flexShrink={0}>
          {BLOCK_LABEL[BlockUtils.getBlockStyles(value)]}
        </Text>
      </Button>
      <BottomMenu isOpen={isOpen} onClose={onClose}>
        {TEXT_BLOCK_STYLE.map(({ label, name, styles }) => (
          <Center
            key={name}
            as={Button}
            variant="unstyled"
            _hover={{ bg: 'orange.100' }}
            fontWeight={'medium'}
            h={'60px'}
            borderTopRadius={20}
            borderBottomRadius={0}
            borderBottom={'1px solid'}
            borderColor={'gray.100'}
            onClick={() => {
              BlockUtils.setBlockStyles({
                editorState: value,
                setEditorState: onChange,
                type: name,
              });
              onClose();
            }}
            {...styles}
          >
            {label}
          </Center>
        ))}
      </BottomMenu>
      <Divider orientation="vertical" h={'20px'} borderColor={'gray.200'} />
      <Flex align={'center'} px={'36px'} gap={'26px'}>
        {INLINE_STYLE.map(({ label, name, Icon }) => (
          <IconButton
            key={name}
            aria-label={label}
            display={'flex'}
            icon={<Icon />}
            variant={'unstyled'}
            minW={'28px'}
            h={'28px'}
            borderRadius={'6px'}
            bg={
              inlineUtils.getInlineStyles(value).includes(name)
                ? 'orange.100'
                : 'none'
            }
            onClick={() => {
              inlineUtils.setInlineStyles({
                editorState: value,
                setEditorState: onChange,
                type: name,
              });
            }}
          />
        ))}
      </Flex>
    </Center>
  );
};

const PostType = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    formState: { errors },
    clearErrors,
    getValues,
    setValue,
  } = useFormContext<Post>();

  return (
    <Box hideFrom={'tablet'} mt={'18px'} mb={'10px'}>
      <Button
        rightIcon={
          <Icon as={ArrowDownIcon} stroke={'black'} w={'12px'} h={'12px'} />
        }
        bg={getValues('postType') ? 'orange.200' : 'orange.100'}
        _hover={{ bg: 'orange.200' }}
        _active={{ bg: 'orange.200' }}
        borderRadius={8}
        onClick={onOpen}
        w={'fit-content'}
        h={'30px'}
        py={0}
        px={'10px'}
        border={errors.postType?.message ? '1px solid' : 'none'}
        borderColor={errors.postType?.message ? 'error' : 'none'}
      >
        <Text fontWeight={'medium'} flexShrink={0}>
          {getValues('postType') ?? '주제'}
        </Text>
      </Button>

      <BottomMenu isOpen={isOpen} onClose={onClose}>
        {Object.values(POST.TYPE).map((type) => (
          <Center
            as={Button}
            key={type}
            variant="unstyled"
            _hover={{ bg: 'orange.100' }}
            onClick={() => {
              setValue('postType', type);
              clearErrors('postType');
              onClose();
            }}
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
