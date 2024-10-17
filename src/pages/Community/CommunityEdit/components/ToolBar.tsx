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
import { Editor } from '@tiptap/react';
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
import useBlockTool from '../hooks/useBlockTool';
import useInlineTool from '../hooks/useInlineTool';
import { Post } from '../schema';

const ToolBar = ({ editor }: { editor: Editor }) => {
  const {
    getValues,
    setValue,
    watch,
    formState: { errors },
    clearErrors,
  } = useFormContext<Post>();

  watch('postType');

  const { headingTools, headingType } = useBlockTool(editor);
  const { inlineTools } = useInlineTool(editor);

  return (
    <Center
      hideBelow={'tablet'}
      borderY={'1px solid'}
      borderColor={'gray.100'}
      h={'64px'}
      flexShrink={0}
    >
      {/* NOTE: 주제 */}
      <Dropdown colorScheme="green" variant={'none'}>
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

      {/* NOTE: 헤딩 툴 */}
      <Dropdown colorScheme="green" variant={'none'}>
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
          {headingType}
        </DropdownTrigger>
        <DropdownList minW={'120px'}>
          {headingTools.map(({ handler, label, styles }) => (
            <DropdownItem key={label} height={'48px'} onClick={handler}>
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

      {/* NOTE: 인라인 툴 */}
      <Flex align={'center'} gap={'34px'} px={'36px'}>
        {inlineTools.map(({ label, handler, isActive, Icon }) => (
          <IconButton
            key={label}
            aria-label={label}
            icon={<Icon />}
            minW={'28px'}
            h={'28px'}
            variant={'unstyled'}
            display={'flex'}
            onClick={handler}
            bg={isActive ? 'green.100' : 'none'}
          />
        ))}
      </Flex>
    </Center>
  );
};

const MobileToolBar = ({ editor }: { editor: Editor }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { headingTools, headingType } = useBlockTool(editor);
  const { inlineTools } = useInlineTool(editor);

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
      {/* NOTE: 모바일 헤딩 툴 */}
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
        <Text flexShrink={0}>{headingType}</Text>
      </Button>

      <BottomMenu isOpen={isOpen} onClose={onClose}>
        {headingTools.map(({ handler, label, styles }) => (
          <Center
            key={label}
            as={Button}
            variant="unstyled"
            _hover={{ bg: 'green.100' }}
            fontWeight={'medium'}
            h={'60px'}
            borderTopRadius={20}
            borderBottomRadius={0}
            borderBottom={'1px solid'}
            borderColor={'gray.100'}
            onClick={() => {
              onClose();
              handler();
            }}
            {...styles}
          >
            {label}
          </Center>
        ))}
      </BottomMenu>

      <Divider orientation="vertical" h={'20px'} borderColor={'gray.200'} />

      {/* NOTE: 모바일 인라인 툴 */}
      <Flex align={'center'} px={'36px'} gap={'26px'}>
        {inlineTools.map(({ Icon, handler, isActive, label }) => (
          <IconButton
            key={label}
            aria-label={label}
            display={'flex'}
            icon={<Icon />}
            variant={'unstyled'}
            minW={'28px'}
            h={'28px'}
            borderRadius={'6px'}
            bg={isActive ? 'green.100' : 'none'}
            onClick={handler}
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
        bg={getValues('postType') ? 'green.200' : 'green.100'}
        _hover={{ bg: 'green.200' }}
        _active={{ bg: 'green.200' }}
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
            _hover={{ bg: 'green.100' }}
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
