import { Box, Divider, Flex } from '@chakra-ui/react';
import { useEditor } from '@tiptap/react';
import { useEffect } from 'react';
import { FormProvider, SubmitHandler, useController } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { BlockerModal, Content, ImageSelector } from '@/components';
import { POST } from '../constants';
import Editor from './components/Editor';
import MobileHeader from './components/MobileHeader';
import SubmitButton from './components/SubmitButton';
import { MobileToolBar, PostType, ToolBar } from './components/ToolBar';
import { MOBILE_HEIGHT } from './constants';
import extensions from './editorExtensions';
import { Post, usePostForm } from './schema';
import { PATH } from '@/routes/constants';
import { useCreatePost } from '@/services/whisper/query';
import { useImageStore } from '@/stores/imageStore';

const CommunityEdit = () => {
  const { IMAGE_GAP, TOOL_BAR, SUBMIT_BUTTON } = MOBILE_HEIGHT;

  const { mutate: createPost, isPending } = useCreatePost();
  const navigate = useNavigate();

  const images = useImageStore((state) => state.images);
  const resetImages = useImageStore((state) => state.resetImages);

  const methods = usePostForm();

  const { field } = useController({
    name: 'content',
    control: methods.control,
  });

  const editor = useEditor({
    extensions,
    onUpdate: ({ editor }) => field.onChange(editor.getText().trim()),
  });

  const onSubmit: SubmitHandler<Post> = ({ postType, title }) => {
    const formData = new FormData();

    /** 속닥속닥 게시글 blob */
    const jsonBlob = new Blob(
      [
        JSON.stringify({
          title,
          content: editor?.getHTML() || '',
          postType: POST.TYPE_KO[postType],
        }),
      ],
      {
        type: 'application/json',
      },
    );

    images.forEach(({ file }) => {
      formData.append('images', file);
    });
    formData.append('texts', jsonBlob);

    createPost(formData, {
      onSuccess() {
        methods.reset();
        setTimeout(() => navigate(PATH.COMMUNITY.MAIN));
      },
    });
  };

  useEffect(() => {
    return () => {
      resetImages();
    };
  }, [resetImages]);

  if (!editor) return null;

  return (
    <>
      <MobileHeader name="속닥속닥 글쓰기" />
      <Content heightWithoutContent={113}>
        <FormProvider {...methods}>
          <Flex
            as={'form'}
            flexDir={'column'}
            justify={'space-between'}
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <ToolBar editor={editor} />

            <Box
              maxW={1228}
              w={'100%'}
              mx={'auto'}
              flexGrow={1}
              pb={{ mobile: '32px', tablet: '48px' }}
              px={'20px'}
            >
              <PostType />
              <Editor editor={editor} />
            </Box>

            <Box
              maxW={1228}
              w={'100%'}
              mx={'auto'}
              px={'20px'}
              position={{ mobile: 'fixed', tablet: 'static' }}
              bottom={SUBMIT_BUTTON + TOOL_BAR + IMAGE_GAP}
            >
              <Divider opacity={1} borderColor={'gray.100'} />
              <Box mt={{ mobile: '16px', tablet: '35px' }}>
                <ImageSelector
                  breakPoints={{
                    0: {
                      slidesPerView: 2.2,
                      spaceBetween: 12,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 12,
                    },
                    1024: {
                      slidesPerView: 7,
                      spaceBetween: 14,
                    },
                  }}
                  color="orange"
                  size={{ mobile: 100, tablet: 136, desktop: 136 }}
                />
              </Box>
            </Box>

            <Box px={{ mobile: '0', tablet: '20px' }}>
              <MobileToolBar editor={editor} />

              <SubmitButton isPending={isPending} />
            </Box>
          </Flex>
        </FormProvider>
      </Content>

      <BlockerModal
        color="orange"
        blockState={methods.getValues('content') !== '' || images.length > 0}
      />
    </>
  );
};

export default CommunityEdit;
