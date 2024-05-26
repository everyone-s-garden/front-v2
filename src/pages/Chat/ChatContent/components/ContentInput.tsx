import { Button, Flex, chakra, createIcon } from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useState } from 'react';

const PlusIcon = createIcon({
  displayName: 'PlusIcon',
  viewBox: '0 0 28 29',
  path: (
    <path
      d="M7 14.5H14M14 14.5H21M14 14.5V7.5M14 14.5V21.5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});

interface ContentInputProps {
  sendMessage: (message: string) => void;
}

const ContentInput = ({ sendMessage }: ContentInputProps) => {
  const [message, setMessage] = useState<string>('');

  const submitMessage = (message: string) => {
    if (!message) return;
    sendMessage(message);
    setMessage('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitMessage(message);
  };

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  // const handleTextAreaKeyDown = (
  //   event: React.KeyboardEvent<HTMLTextAreaElement>,
  // ) => {
  //   if (event.key === 'Enter' && !event.shiftKey) {
  //     event.preventDefault();
  //     if (!message.trim()) return;
  //     submitMessage(message);
  //   }
  // };

  return (
    <Flex
      h={{ mobile: '80px', tablet: '155px' }}
      border={{ mobile: 'none', tablet: '1px' }}
      borderColor={{ mobile: '', tablet: 'gray.200' }}
      w="100%"
      position="absolute"
      bottom="0"
      alignItems="center"
      p="24px 16px"
      gap="16px"
      bg="white"
    >
      <chakra.button
        flexShrink="0"
        display="flex"
        justifyContent="center"
        alignItems="center"
        rounded="50%"
        w={{ mobile: '24px', tablet: '40px' }}
        h={{ mobile: '24px', tablet: '40px' }}
        bg="orange.300"
      >
        <PlusIcon
          w={{ mobile: '16.8px', tablet: '28px' }}
          h={{ mobile: '16.8px', tablet: '28px' }}
          stroke="black"
        />
      </chakra.button>
      <chakra.form
        display="flex"
        w="100%"
        alignItems="center"
        gap="16px"
        onSubmit={handleSubmit}
      >
        <chakra.textarea
          placeholder="메세지 보내기"
          w="100%"
          h={{ mobile: '45px', tablet: '107px' }}
          rounded="10px"
          p={{ mobile: '9px', tablet: '18px 14px' }}
          resize="none"
          bg="gray.100"
          fontSize={{ mobile: '16px', tablet: '20px' }}
          fontWeight="medium"
          _placeholder={{
            fontSize: { mobile: '16px', tablet: '20px' },
            fontWeight: 'medium',
            color: 'gray.300',
          }}
          outline="none"
          value={message}
          onChange={handleMessageChange}
          // onKeyUp={handleTextAreaKeyDown}
        />
        <Button
          variant="unstyled"
          h="fit-content"
          flexShrink={0}
          rounded="10px"
          bg="orange.300"
          fontWeight="medium"
          textAlign="center"
          p={{ mobile: '8px', tablet: '12px 13px' }}
          fontSize={{ mobile: '14px', tablet: '20px' }}
          onClick={() => submitMessage(message)}
        >
          보내기
        </Button>
      </chakra.form>
    </Flex>
  );
};

export default ContentInput;
