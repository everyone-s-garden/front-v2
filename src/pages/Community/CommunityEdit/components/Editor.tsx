import { Input, Textarea } from '@chakra-ui/react';
import { MOBILE_HEIGHT } from '../constants';

const Editor = () => {
  const { IMAGE, IMAGE_GAP, TOOL_BAR, SUBMIT_BUTTON, EDITOR_GAP } =
    MOBILE_HEIGHT;

  return (
    <>
      <Input
        p={0}
        fontSize={{ mobile: '18px', tablet: '24px' }}
        fontWeight={'semiBold'}
        placeholder="제목"
        _placeholder={{ color: 'gray.300' }}
        variant={'unstyled'}
        borderRadius={0}
        borderBottom={'1px solid'}
        borderColor={'gray.100'}
        h={{ mobile: '37px', tablet: '48px' }}
        pb={'18px'}
        mt={{ mobile: '18px', tablet: '48px' }}
        mb={'35px'}
        px={'20px'}
      />
      <Textarea
        resize={'none'}
        placeholder="질문, 자랑, 공유 등 다양한 글을 작성해보세요."
        _placeholder={{ color: 'gray.300' }}
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
      />
    </>
  );
};

export default Editor;
