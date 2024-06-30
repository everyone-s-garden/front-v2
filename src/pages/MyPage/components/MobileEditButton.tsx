import { Box, Button, Flex } from '@chakra-ui/react';
import { PropsWithChildren, SetStateAction } from 'react';

interface NomalButtonProps {
  onClick?: () => void;
}

export const NormalButton = ({
  onClick,
  children,
}: PropsWithChildren<NomalButtonProps>) => {
  return (
    <Button
      w="fit-content"
      h="fit-content"
      padding="0"
      bg="inherit"
      onClick={(e) => {
        if (onClick) {
          e.stopPropagation();
          onClick();
        }
      }}
      _hover={{ bg: 'inherit' }}
    >
      {children}
    </Button>
  );
};

interface MobileEditButtonProps {
  checkboxOpen: boolean;
  setCheckboxOpen: React.Dispatch<SetStateAction<boolean>>;
  handleDelete: () => void;
}

const MobileEditButton = ({
  checkboxOpen,
  setCheckboxOpen,
  handleDelete,
}: MobileEditButtonProps) => {
  return (
    <Box
      pb="12px"
      display={{ mobile: 'flex', tablet: 'none' }}
      justifyContent="flex-end"
      onClick={() => setCheckboxOpen(true)}
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      {!checkboxOpen && (
        <NormalButton onClick={() => setCheckboxOpen(true)}>편집</NormalButton>
      )}

      {checkboxOpen && (
        <Flex>
          <NormalButton onClick={handleDelete}>삭제</NormalButton>
          <Box h="full" w="1px" bg="gray" />
          <NormalButton onClick={() => setCheckboxOpen(false)}>
            취소
          </NormalButton>
        </Flex>
      )}
    </Box>
  );
};

export default MobileEditButton;
