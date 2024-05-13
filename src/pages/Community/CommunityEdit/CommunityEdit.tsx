import { Box, Divider, Flex } from '@chakra-ui/react';
import { ImageSelector } from '@/components';
import Editor from './components/Editor';
import SubmitButton from './components/SubmitButton';
import { MobileToolBar, PostType, ToolBar } from './components/ToolBar';
import { MOBILE_HEIGHT } from './constants';

const CommunityEdit = () => {
  const { IMAGE_GAP, TOOL_BAR, SUBMIT_BUTTON } = MOBILE_HEIGHT;

  return (
    <Flex
      as={'form'}
      flexDir={'column'}
      justify={'space-between'}
      h={'calc(100svh - 108px)'}
    >
      <ToolBar />

      <Box
        maxW={1228}
        w={'100%'}
        mx={'auto'}
        flexGrow={1}
        pb={{ mobile: '32px', tablet: '48px' }}
        mb={{ mobile: '0', tablet: '34px' }}
      >
        <Box px={'20px'}>
          <PostType />
        </Box>
        <Editor />
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
        <MobileToolBar />
        <SubmitButton />
      </Box>
    </Flex>
  );
};

export default CommunityEdit;
