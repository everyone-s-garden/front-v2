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

const mock = [
  {
    description:
      '대한민국에서는 8-9월에 모판에 파종하여 10월에 어린 모종을 밭에 정식하고, 다음 해 6월 무렵에 수확하는 가을뿌림재배가 대부분을 차지하고 있다. 봄에 파종하여 가을에 수확하는 봄뿌림재배를 하면 다음 해 1월 상순까지는 싹이 나지 않고, 그 뒤에 냉장하면 4월까지 저장할 수 있다. 봄뿌리재배는 강원도 대관령·인제등지의 고랭지에서 하고 있다. 이 밖에 3-4월에 파종하여 5월 중순경에 작은 알(球)을 수확하고 건조시켰다가 8월 무렵 밭에 심어 겨울부터 이른 봄에 수확하는 세트 재배방식도 있다.',
    link: 'https://ko.wikipedia.org/wiki/%EB%B0%B0%EC%9A%B0',
    name: '마늘',
  },
  {
    description:
      '대한민국에서는 8-9월에 모판에 파종하여 10월에 어린 모종을 밭에 정식하고, 다음 해 6월 무렵에 수확하는 가을뿌림재배가 대부분을 차지하고 있다. 봄에 파종하여 가을에 수확하는 봄뿌림재배를 하면 다음 해 1월 상순까지는 싹이 나지 않고, 그 뒤에 냉장하면 4월까지 저장할 수 있다. 봄뿌리재배는 강원도 대관령·인제등지의 고랭지에서 하고 있다. 이 밖에 3-4월에 파종하여 5월 중순경에 작은 알(球)을 수확하고 건조시켰다가 8월 무렵 밭에 심어 겨울부터 이른 봄에 수확하는 세트 재배방식도 있다.',
    link: 'https://ko.wikipedia.org/wiki/%EB%B0%B0%EC%9A%B0',
    name: '마늘',
  },
  {
    description:
      '대한민국에서는 8-9월에 모판에 파종하여 10월에 어린 모종을 밭에 정식하고, 다음 해 6월 무렵에 수확하는 가을뿌림재배가 대부분을 차지하고 있다. 봄에 파종하여 가을에 수확하는 봄뿌림재배를 하면 다음 해 1월 상순까지는 싹이 나지 않고, 그 뒤에 냉장하면 4월까지 저장할 수 있다. 봄뿌리재배는 강원도 대관령·인제등지의 고랭지에서 하고 있다. 이 밖에 3-4월에 파종하여 5월 중순경에 작은 알(球)을 수확하고 건조시켰다가 8월 무렵 밭에 심어 겨울부터 이른 봄에 수확하는 세트 재배방식도 있다.',
    link: 'https://ko.wikipedia.org/wiki/%EB%B0%B0%EC%9A%B0',
    name: '마늘',
  },
];

const MonthlyCrop = () => {
  const currentMonth = new Date().getMonth();

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
          />
          <Image
            rounded="10px"
            hideFrom="desktop"
            src={`/src/assets/images/month/mobile/${currentMonth + 1}.png`}
          />
          <Accordion
            allowToggle
            maxH={{ tablet: '177px', desktop: '225px' }}
            overflowY="auto"
            w="100%"
          >
            {mock.map((item, index) => (
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
