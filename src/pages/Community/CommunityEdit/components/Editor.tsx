import { Box, Input, Text } from '@chakra-ui/react';
import { Editor as DraftEditor } from 'react-draft-wysiwyg';
import { ControllerRenderProps, useFormContext } from 'react-hook-form';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Post } from '../schema';
import isEditorEmpty from '../utils/isEditorEmpty';
import styles from './editorStyles';
import { editorLabels, toolbar } from './toolData';

const Editor = ({ value, onChange }: Partial<ControllerRenderProps>) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<Post>();

  const content = watch('content');

  return (
    <>
      <Box
        pos={'relative'}
        borderBottom={'1px solid'}
        borderColor={'gray.100'}
        h={{ mobile: '37px', tablet: '48px' }}
        pb={'18px'}
        mt={{ mobile: '18px', tablet: '48px' }}
        mb={'35px'}
      >
        <Input
          p={0}
          borderRadius={0}
          fontSize={{ mobile: '18px', tablet: '24px' }}
          fontWeight={'semiBold'}
          placeholder="제목"
          _placeholder={{ color: 'gray.300' }}
          variant={'unstyled'}
          {...register('title')}
        />
        {errors.title?.message && (
          <Text
            pos={'absolute'}
            top={{ mobile: '43px', tablet: '54px' }}
            color={'error'}
            fontWeight={'medium'}
            fontSize={'14px'}
          >
            {errors.title.message}
          </Text>
        )}
      </Box>

      {/* <Textarea
        p={0}
        fontWeight={'medium'}
        variant={'unstyled'}
        borderRadius={0}
        h={{
          mobile: `calc(100% - ${TOOL_BAR + SUBMIT_BUTTON + IMAGE + IMAGE_GAP * 2 + EDITOR_GAP * 2}px)`,
          tablet: '554px',
        }}
        lineHeight={{ mobile: '24px', tablet: '27px' }}
        overflow={'auto'}
        px={'20px'}
      /> */}
      <Box __css={styles} pos={'relative'}>
        <Box
          as={DraftEditor}
          editorState={value}
          onEditorStateChange={onChange}
          toolbar={toolbar}
          toolbarHidden={true}
          localization={{ locale: 'ko', translations: editorLabels }}
          placeholder="질문, 자랑, 공유 등 다양한 글을 작성해보세요."
        />
        {errors.content?.message && isEditorEmpty(content) && (
          <Text
            pos={'absolute'}
            top={{ mobile: '24px', tablet: '25px' }}
            color={'error'}
            fontWeight={'medium'}
            fontSize={'14px'}
          >
            {errors.content.message}
          </Text>
        )}
      </Box>
    </>
  );
};

export default Editor;
