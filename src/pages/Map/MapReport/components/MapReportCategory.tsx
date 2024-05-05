import { Box, FormLabel, Icon, Text } from '@chakra-ui/react';
import { useState, useRef, useEffect, MouseEvent } from 'react';
import { ArrowDownIcon } from '@/assets/icons';
import MapReportCategoryDropdown from './MapReportCategoryDropdown';

const categoryArr: string[] = [
  '상세 유형을 선택해주세요.',
  '주제와 맞지 않음',
  '정보가 부정확함',
  '지나친 광고성 게시물',
  '도배 및 중복 게시물',
  '욕설 / 비방이 심함',
  '외설적인 게시물',
  '개인정보 노출',
  '기타',
];

const MapReportCategory: React.FC = () => {
  const [category, setCategory] = useState<string>(categoryArr[0]);
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
      <FormLabel mb="20px">상세 유형 선택</FormLabel>
      <Box
        w="100%"
        borderRadius="10px"
        border="1px"
        borderColor="gray.200"
        p="16px 24px"
        cursor="pointer"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        onClick={() => setShowCategory(!showCategory)}
      >
        <Text
          textColor={category === categoryArr[0] ? 'gray.400' : '#282828'}
          fontSize="18px"
        >
          {category}
        </Text>
        <Icon as={ArrowDownIcon} w="24px" h="24px" />
      </Box>
      {showCategory && (
        <MapReportCategoryDropdown
          categoryArr={categoryArr}
          setCategory={setCategory}
          setShowCategory={setShowCategory}
        />
      )}
    </Box>
  );
};

export default MapReportCategory;
