import {
  Box,
  FormLabel,
  Icon,
  Show,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useState, useRef, useEffect, MouseEvent } from 'react';
import { ArrowDownIcon } from '@/assets/icons';
import MapReportCategoryDropdown from './MapReportCategoryDropdown';
import MobileReportBottomMenu from './MobileReportBottomMenu';
import { categoryArr } from './categoryArr';

interface MapReportCategoryProps {
  onChange: (...event: string[]) => void;
  value?: string;
}

const MapReportCategory = ({ onChange, value }: MapReportCategoryProps) => {
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowCategory(false);
      }
    };

    const handleEvent = handleClickOutside as unknown as EventListener;

    window.addEventListener('click', handleEvent);

    return () => {
      window.removeEventListener('click', handleEvent);
    };
  }, []);

  return (
    <Box pos="relative" ref={containerRef}>
      <FormLabel htmlFor="category" mb={{ mobile: '14px', tablet: '20px' }}>
        상세 유형 선택
      </FormLabel>
      <Box
        w="100%"
        borderRadius="10px"
        border="1px"
        borderColor="gray.200"
        p={{ mobile: '12px 16px', tablet: '16px 24px' }}
        cursor="pointer"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        userSelect="none"
        onClick={() => {
          onOpen();
          setShowCategory(!showCategory);
        }}
      >
        <Text
          textColor={value === categoryArr[0] ? 'gray.400' : '#282828'}
          fontSize={{ mobile: '16px', tablet: '18px' }}
        >
          {value}
        </Text>
        <Icon as={ArrowDownIcon} w="24px" h="24px" />
      </Box>
      {showCategory && (
        <>
          <Show above="tablet">
            <MapReportCategoryDropdown
              setCategory={onChange}
              setShowCategory={setShowCategory}
            />
          </Show>
          <Show below="tablet">
            <MobileReportBottomMenu
              setCategory={onChange}
              setShowCategory={setShowCategory}
              isOpen={isOpen}
              onClose={onClose}
            />
          </Show>
        </>
      )}
    </Box>
  );
};

export default MapReportCategory;
