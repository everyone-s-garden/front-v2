import { Box, Flex, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';

const Description = ({ title, des }: { title: string; des: string }) => (
  <Flex>
    <Text minW="25%" fontWeight="medium">
      {title}
    </Text>
    <Text fontWeight="medium">{des}</Text>
  </Flex>
);

const GardenDescription = ({ gardenInfo }: { gardenInfo: GardenDetail }) => {
  const getGardenDate = () => {
    const { recruitStartDate, recruitEndDate } = gardenInfo;

    if (recruitStartDate === recruitEndDate) return recruitStartDate;

    const startDate = dayjs(gardenInfo.recruitStartDate).format('YYYY.MM.DD');
    const endDate = dayjs(gardenInfo.recruitEndDate).format('YYYY.MM.DD');

    return startDate + ' ~ ' + endDate;
  };

  return (
    <Box padding="30px">
      <Flex direction="column" gap="5px" marginBottom="25px">
        <Text fontSize="20px" fontWeight="semibold">
          {gardenInfo.gardenName}
        </Text>
        <Text fontSize="15px" color="gray.700">
          {gardenInfo.address}
        </Text>
      </Flex>
      <Flex flexDir="column" gap="21px">
        <Description title="신청기간" des={getGardenDate()} />
        <Description
          title="가격"
          des={
            isNaN(Number(gardenInfo.price))
              ? gardenInfo.price
              : `${Number(gardenInfo.price).toLocaleString()} 원`
          }
        />
        <Description title="면적" des={gardenInfo.size + ' ㎡'} />
        <Description
          title="부대 시설"
          des={gardenInfo.gardenFacilities || '-'}
        />
        <Description
          title="세부 사항"
          des={gardenInfo.gardenDescription || '-'}
        />
      </Flex>
    </Box>
  );
};

export default GardenDescription;
