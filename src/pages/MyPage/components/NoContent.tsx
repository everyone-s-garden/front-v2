import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { PostBoxIcon } from '@/assets/icons';

interface NoContentProps {
  icon?: React.ReactSVGElement;
  content: string;
  mt?: React.CSSProperties['margin'];
}

export default function NoContent({
  icon,
  content,
  mt = '80px',
}: NoContentProps) {
  return (
    <Flex
      align="center"
      justify="center"
      w="full"
      h="full"
      flexDir="column"
      gap="16px"
      mt={mt}
    >
      {icon || <PostBoxIcon />}
      <Text whiteSpace="pre-wrap" textAlign="center" color="gray.500">
        {content}
      </Text>
    </Flex>
  );
}
