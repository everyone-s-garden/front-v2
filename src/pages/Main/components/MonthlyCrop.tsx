import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import ItemTitle from './ItemTitle';
import { useGetMonthCrops } from '@/services/crop/query';

const MONTH_TITLE = [
  '1월 추운 겨울 심기 좋은 작물 추천 해드려요!',
  '2월 겨울의 끝자락에 심기 좋은 작물을 알려드려요!',
  '3월 봄 시작에 딱! 심기 좋은 작물 추천해요!',
  '4월 봄 바람에 어울리는 심기 좋은 작물 추천해요!',
  '5월 따뜻한 봄에 딱! 심기 좋은 작물을 알려드려요!',
  '6월 봄의 마지막 심기 좋은 작물 추천해요!',
  '7월 더운 여름, 심기 좋은 작물 추천해요!',
  '8월 무더위에도 잘 자라는 심기 좋은 작물 추천해요!',
  '9월 가을의 시작에 심기 좋은 작물 추천해요!',
  '10월 가을에 딱! 심기 좋은 작물을 알려드려요!',
  '11월 가을 바람에 어울리는 심기 좋은 작물 추천해요!',
  '12월 추운 겨울에도 잘 자라는 심기 좋은 작물 추천해요!',
];

const MonthlyCrop = () => {
  const { data: monthCrops } = useGetMonthCrops();
  const currentMonth = new Date().getMonth();

  if (!monthCrops) return null;

  return (
    <Box bgColor="#fff7ee" py={{ mobile: '45px', tablet: '90px' }} px="20px">
      <Flex
        flexDir="column"
        m="0 auto"
        h="100%"
        maxW="1194px"
        justifyContent="center"
      >
        <ItemTitle>{MONTH_TITLE[currentMonth]}</ItemTitle>
        <Flex
          flexDir={{ mobile: 'column', tablet: 'row', desktop: 'row' }}
          gap={{ mobile: '24px', tablet: '30px' }}
        >
          <Image
            rounded="10px"
            hideBelow="desktop"
            src={`/src/assets/images/month/pc/${currentMonth + 1}.png`}
            height={'min-content'}
          />
          <Image
            rounded="10px"
            hideFrom="desktop"
            src={`/src/assets/images/month/mobile/${currentMonth + 1}.png`}
          />
          <Accordion allowToggle w="100%">
            {monthCrops[currentMonth].cropInfos.map((item, index) => (
              <AccordionItem key={index}>
                <AccordionButton px="7.5px">
                  <Text
                    fontSize={{ tablet: '18px', desktop: '20px' }}
                    fontWeight="semiBold"
                    flex="1"
                    textAlign="left"
                  >
                    {item.name}
                  </Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel px="7.5px">
                  <Flex flexDir="column" gap="5px">
                    <Text
                      textColor="gray.700"
                      fontSize={{ tablet: '14px', desktop: '20px' }}
                      fontWeight="regular"
                      letterSpacing="0.16px"
                    >
                      {item.description}
                    </Text>
                    <Link
                      textColor="gray.700"
                      fontSize={{ tablet: '14px', desktop: '20px' }}
                      fontWeight="regular"
                      letterSpacing="0.16px"
                      href={item.link}
                      isExternal
                    >
                      더 알아보기
                    </Link>
                  </Flex>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>
      </Flex>
    </Box>
  );
};

export default MonthlyCrop;
