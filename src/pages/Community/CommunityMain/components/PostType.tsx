import { Button, Flex, Tag } from '@chakra-ui/react';
import { POST } from '../../constants';
import { PostType } from '../../types';
import { useWhisperStore } from '@/stores/whisperStore';

const PostType = () => {
  const postType = useWhisperStore((state) => state.params.postType);
  const setPostType = useWhisperStore((state) => state.setPostType);

  const handleClickType = (type: PostType) => {
    if (postType === type) {
      setPostType('');

      return;
    }

    setPostType(type);
  };

  return (
    <Flex gap={{ mobile: '12px', tablet: '14px' }}>
      {Object.values(POST.TYPE).map((type) => (
        <Tag
          key={type}
          as={Button}
          bg={postType === POST.TYPE_KO[type] ? 'orange.300' : 'orange.200'}
          _hover={
            postType === POST.TYPE_KO[type]
              ? { bg: 'orange.300' }
              : { bg: 'orange.200' }
          }
          _active={
            postType === POST.TYPE_KO[type]
              ? { bg: 'orange.300' }
              : { bg: 'orange.200' }
          }
          fontSize={{ mobile: 14, tablet: 18 }}
          onClick={() => handleClickType(POST.TYPE_KO[type])}
          px={{ mobile: '6px', tablet: '10px' }}
          py={{ mobile: '4px', tablet: '6px' }}
          h={'fit-content'}
        >
          {type}
        </Tag>
      ))}
    </Flex>
  );
};

export default PostType;
