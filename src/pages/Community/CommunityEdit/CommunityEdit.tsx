import { Box, Divider, Flex } from '@chakra-ui/react';
import { convertToRaw } from 'draft-js';
import { Controller, FormProvider, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ImageSelector } from '@/components';
import Editor from './components/Editor';
import SubmitButton from './components/SubmitButton';
import { MobileToolBar, PostType, ToolBar } from './components/ToolBar';
import { MOBILE_HEIGHT } from './constants';
import { Post, usePostForm } from './schema';
import convertToHtml from './utils/convertToHtml';
import { useCreatePost } from '@/services/whisper/query';
import { useImageStore } from '@/stores/imageStore';

const CommunityEdit = () => {
  const { IMAGE_GAP, TOOL_BAR, SUBMIT_BUTTON } = MOBILE_HEIGHT;

  const { mutate: createPost } = useCreatePost();
  const navigate = useNavigate();

  const images = useImageStore((state) => state.images);

  const methods = usePostForm();

  const onSubmit: SubmitHandler<Post> = ({ postType, content, title }) => {
    console.log('제출!');

    postType;

    const formData = new FormData();

    const rawContentState = convertToRaw(content.getCurrentContent());
    const markup = convertToHtml(rawContentState.blocks);

    /** 속닥속닥 게시글 blob */
    const jsonBlob = new Blob(
      [
        JSON.stringify({
          title,
          content: markup,
          postType: '',
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
        navigate('/community');
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <Flex
        as={'form'}
        flexDir={'column'}
        justify={'space-between'}
        h={'calc(100svh - 108px)'}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <Controller
          render={({ field }) => (
            <>
              <ToolBar {...field} />

              <Box
                maxW={1228}
                w={'100%'}
                mx={'auto'}
                flexGrow={1}
                pb={{ mobile: '32px', tablet: '48px' }}
                px={'20px'}
                mb={{ mobile: '0', tablet: '34px' }}
              >
                <PostType />
                <Editor {...field} />
              </Box>

              <Box
                maxW={1096}
                w={'100%'}
                mx={'auto'}
                px={'20px'}
                position={{ mobile: 'absolute', tablet: 'static' }}
                bottom={SUBMIT_BUTTON + TOOL_BAR + IMAGE_GAP}
              >
                <Divider borderColor={'gray.100'} />
                <Box mt={{ mobile: '16px', tablet: '35px' }}>
                  <ImageSelector
                    breakPoints={{
                      0: {
                        slidesPerView: 2.5,
                        spaceBetween: 12,
                      },
                      1024: {
                        slidesPerView: 6,
                        spaceBetween: 14,
                      },
                    }}
                    color="orange"
                    size={{ mobile: 100, tablet: 136, desktop: 136 }}
                  />
                </Box>
              </Box>

              <Box px={{ mobile: '0', tablet: '20px' }}>
                <MobileToolBar {...field} />
                <SubmitButton />
              </Box>
            </>
          )}
          name="content"
          control={methods.control}
        />
      </Flex>
    </FormProvider>
  );
};

export default CommunityEdit;
