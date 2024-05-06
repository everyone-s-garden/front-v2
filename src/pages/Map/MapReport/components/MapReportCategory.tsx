import { Box, FormLabel, Icon, Text } from '@chakra-ui/react';
import { useState, useRef, useEffect, MouseEvent } from 'react';
import { ArrowDownIcon } from '@/assets/icons';
import MapReportCategoryDropdown from './MapReportCategoryDropdown';

interface MapReportCategoryProps {
  onChange: (...event: string[]) => void;
  value: string;
  categoryArr: string[];
}

const MapReportCategory = ({
  onChange,
  value,
  categoryArr,
}: MapReportCategoryProps) => {
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
        onClick={() => setShowCategory(!showCategory)}
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
        <MapReportCategoryDropdown
          categoryArr={categoryArr}
          setCategory={onChange}
          setShowCategory={setShowCategory}
        />
      )}
    </Box>
  );
};

export default MapReportCategory;
