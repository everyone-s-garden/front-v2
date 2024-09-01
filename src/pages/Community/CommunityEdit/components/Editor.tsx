import { Box, Input, Text } from '@chakra-ui/react';
import { EditorContent, Editor as EditorType } from '@tiptap/react';
import { useFormContext } from 'react-hook-form';
import styles from '../editorStyles';
import { Post } from '../schema';

const Editor = ({ editor }: { editor: EditorType }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Post>();

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

      <Box __css={styles} pos={'relative'}>
        {errors.content && (
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
        <Box as={EditorContent} editor={editor} />
      </Box>
    </>
  );
};

export default Editor;
