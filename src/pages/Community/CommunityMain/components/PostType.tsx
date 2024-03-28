import { Button, Flex, Tag } from '@chakra-ui/react';
import { useState } from 'react';
import { POST } from '../../constants';
import { PostType } from '../../types';

const PostType = () => {
  const [selectedType, setSelectedType] = useState<PostType | ''>('');

  // TODO: params 변경
  const handleClickType = (type: PostType) => {
    if (selectedType === type) {
      setSelectedType('');

      return;
    }

    setSelectedType(type);
  };

  return (
    <Flex gap={{ mobile: '12px', tablet: '14px' }}>
      {Object.values(POST.TYPE).map((type) => (
        <Tag
          key={type}
          as={Button}
          bg={selectedType === POST.TYPE_KO[type] ? 'orange.300' : 'orange.200'}
          _hover={
            selectedType === POST.TYPE_KO[type]
              ? { bg: 'orange.300' }
              : { bg: 'orange.200' }
          }
          _active={
            selectedType === POST.TYPE_KO[type]
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
