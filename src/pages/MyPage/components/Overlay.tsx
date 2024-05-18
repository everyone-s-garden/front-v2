import { Box } from '@chakra-ui/react';

interface OverlayProps {
  report: boolean;
}
const Overlay = ({ report }: OverlayProps) => {
  if (!report) return;

  return (
    <Box
      w="full"
      h="full"
      bg="rgba(255,255,255,0.6)"
      zIndex={2}
      pos="absolute"
      left="0"
      top="0"
    />
  );
};

export default Overlay;
