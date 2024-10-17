import { Box, Button, Flex, Spinner, Text } from '@chakra-ui/react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ItemTitle from '../ItemTitle';
import CurrentWeather from './CurrentWeather';
import NextWeather from './NextWeather';
import WeatherHeader from './WeatherHeader';

const Weather = () => {
  return (
    <Box px="20px">
      <Flex flexDir="column" m="0 auto" maxW="1194px" w="100%">
        <ItemTitle>위치에 따른 날씨를 확인하고 작물을 키워요!</ItemTitle>
        <Box border="1px" borderColor="gray.100" rounded="10px">
          <WeatherHeader />
          <Suspense
            fallback={
              <Flex
                h={{ mobile: '100px', tablet: '148px' }}
                justifyContent="center"
                alignItems="center"
                bg="gray.50"
              >
                <Spinner
                  speed="0.6s"
                  size="md"
                  thickness="3px"
                  color="green.500"
                />
              </Flex>
            }
          >
            <CurrentWeather />
          </Suspense>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                onReset={reset}
                fallbackRender={({ resetErrorBoundary }) => (
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    h="48px"
                    borderTop="1px"
                    borderColor="gray.100"
                  >
                    <Text>날씨 정보를 가져오는데 실패했어요...</Text>
                    <Button
                      variant="unstyled"
                      onClick={() => resetErrorBoundary()}
                    >
                      다시 시도하기
                    </Button>
                  </Flex>
                )}
              >
                <Suspense
                  fallback={
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      h="48px"
                      borderTop="1px"
                      borderColor="gray.100"
                    >
                      <Spinner
                        speed="0.6s"
                        size="sm"
                        thickness="3px"
                        color="green.500"
                      />
                    </Flex>
                  }
                >
                  <NextWeather />
                </Suspense>
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </Box>
      </Flex>
    </Box>
  );
};

export default Weather;
