import { Box, Flex, Image, Text } from '@chakra-ui/react';

interface MapGardens {
  gardens: Garden[];
}

const MapGardens = ({ gardens }: MapGardens) => {
  return (
    <Box h={{ mobile: '550px', tablet: 'calc(100vh - 166px)' }} overflow="auto">
      {gardens.map((garden) => (
        <Box
          w={{ mobile: '100%', tablet: '352px' }}
          margin="0 auto"
          h={{ mobile: '', tablet: '170px' }}
          padding={{ mobile: '20px', tablet: '13px 0' }}
          borderBottom="1px solid"
          borderBottomColor="gray.100"
          key={garden.gardenId}
        >
          <Flex gap="17px">
            <Image
              minW={{ mobile: '148px', tablet: '176px' }}
              h={{ mobile: '115px', tablet: '138px' }}
              borderRadius="8px"
              cursor="pointer"
              src={
                // 예시 이미지
                'https://s3-alpha-sig.figma.com/img/260d/cf56/ae3a3e0756812f18eecb200f5aa341a3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FTEevLd1T3lQmJjKqDh-MM4hY0E6GX1gWMgPFfVkUrYrYYgx0Id0zPioeQvrPp1Rkc~rOcZROBqGf0ElPJZnBFlURZ~okNw2XwgNTbFEF4f9JvDRGMpNSAcRrxbvRLSIYr9B~~SjOZDRKY5f5QMbbUvjgHxPpdSG~ctYqbet2qDhHeOFemrdicvTbDF5QimDqEZjpwBVmajBn6aIaz24YMte1mbGv~xoHheAZrne97oqvaUlIrnLlPL2df0j0dzbZCkr-3mJQczScxJwa~IN0iznuXuFDGqRa6vbTPaNbPmOLidJahLJIOkkE5J-ehNySgwMszDz2SWlVp0vZNAnPg__'
              }
              alt={garden.gardenName}
            />

            <Box w={{ mobile: '50%', tablet: '42.5%' }}>
              <Flex
                justifyContent="center"
                alignItems="center"
                marginBottom="12px"
                gap="5px"
                w="74px"
                h="28px"
                bgColor="green.100"
                borderRadius="8px"
                border="1px solid"
                borderColor="green.500"
              >
                {garden.gardenStatus === 'ACTIVE' && (
                  <Box
                    w="9px"
                    h="9px"
                    bgColor="orange.500"
                    borderRadius="50%"
                  />
                )}

                <Text fontSize="14px">
                  {garden.gardenStatus === 'ACTIVE' ? '모집중' : '마감'}
                </Text>
              </Flex>
              <Flex flexDir="column" gap={{ mobile: '0px', tablet: '6px' }}>
                <Text fontWeight="medium" fontSize="18px" isTruncated>
                  {garden.gardenName}
                  dsalkfnsdalfnas;kdnvk;lsfnvlkjdfnljvnadsflvnadsfasdf
                </Text>
                <Text fontWeight="regular" fontSize="16px" color="gray.700">
                  {garden.size}평
                </Text>
                <Text fontWeight="semibold" fontSize="16px">
                  평당 {Number(garden.price).toLocaleString()}원
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default MapGardens;
