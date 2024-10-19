import { Button, Flex, Tag } from '@chakra-ui/react';
import { POST } from '../../constants';
import { PostType as TypePost } from '../../types';
import { useWhisperStore } from '@/stores/whisperStore';

const PostType = () => {
  const postType = useWhisperStore((state) => state.params.postType);
  const setPostType = useWhisperStore((state) => state.setPostType);

  const handleClickType = (type: TypePost) => {
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
          bg={postType === POST.TYPE_KO[type] ? 'black' : 'green.300'}
          color={postType === POST.TYPE_KO[type] ? 'white' : 'black'}
          _hover={{ bg: 'black', color: 'white' }}
          fontSize={{ mobile: '14px', tablet: '17px' }}
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
