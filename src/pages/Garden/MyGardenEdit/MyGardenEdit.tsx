import {
  Box,
  Center,
  Flex,
  Text,
  Textarea,
  Input as ChakraInput,
} from '@chakra-ui/react';
import { SubmitHandler } from 'react-hook-form';
import { Content, DatePicker, ImageSelector } from '@/components';
import FlexInput from '../components/FlexInput';
import MobileHeader from '../components/MobileHeader';
import SearchBar from '../components/SearchBar';
import SubmitButton from '../components/SubmitButton';
import { MyGarden, useMyGardenForm } from './schema';

const MyGardenCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useMyGardenForm();

  const onSubmit: SubmitHandler<MyGarden> = (data) => {
    console.log(data);
  };

  return (
    <>
      <MobileHeader name="나의 텃밭 등록하기" />
      <Content heightWithoutContent={113}>
        <Box
          as={'form'}
          maxW={'704px'}
          px={'20px'}
          pb={{ mobile: '90px', tablet: undefined }}
          marginInline="auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Center h={'115px'} hideBelow={'tablet'}>
            <Text
              fontSize={'18px'}
              fontWeight={'semiBold'}
              textAlign={'center'}
            >
              나의 텃밭 등록하기
            </Text>
          </Center>

          <Box
            w={{ mobile: 'calc(100% + 20px)', tablet: undefined }}
            mt={{ mobile: '26px', tablet: '0' }}
            mb={{ mobile: '30px', tablet: '50px' }}
            __css={{
              '.swiper': {
                pr: { mobile: '20px', tablet: '0' },
              },
            }}
          >
            <ImageSelector
              color="green"
              breakPoints={{
                0: {
                  slidesPerView: 2.5,
                  spaceBetween: 14,
                },
                768: {
                  slidesPerView: 3.5,
                  spaceBetween: 12,
                },
              }}
              size={{ mobile: 100, tablet: 136, desktop: 136 }}
            />
          </Box>

          <Flex flexDir={'column'} gap={{ mobile: '28px', tablet: '34px' }}>
            <FlexInput
              label="텃밭 정보"
              errorMessage={errors.gardenId ? '필수 입력 항목입니다.' : ''}
              flexGrow={1}
            >
              <SearchBar placeholder={'텃밭명을 입력해주세요.'} />
            </FlexInput>

            <FlexInput
              label="위치"
              errorMessage={errors.gardenId ? '필수 입력 항목입니다.' : ''}
              flexGrow={1}
              divider={true}
            >
              <ChakraInput
                {...register('gardenId')}
                variant={'unstyled'}
                borderRadius={0}
                fontWeight={'medium'}
                placeholder="검색해서 등록 시 자동으로 불러와져요"
                _placeholder={{ color: 'gray.300' }}
              />
            </FlexInput>

            <FlexInput
              label="기간"
              gap={{ mobile: '18px', tablet: '40px' }}
              errorMessage={
                errors.useStartDate || errors.useEndDate
                  ? '필수 선택 항목입니다.'
                  : ''
              }
              errorTop={{ mobile: '72px', tablet: '60px' }}
            >
              <DatePicker onChange={() => {}} />
              <DatePicker onChange={() => {}} placeholder="사용 종료일" />
            </FlexInput>

            <Textarea
              placeholder={'자세한 설명을 적어주세요.'}
              _placeholder={{ color: 'gray.300' }}
              fontWeight={'medium'}
              resize={'none'}
              h={'160px'}
              variant={'unstyled'}
              borderRadius={'10px'}
              border={'1px solid'}
              borderColor={'gray.100'}
              p={'20px'}
              {...register('description')}
            />
          </Flex>

          <SubmitButton />
        </Box>
      </Content>
    </>
  );
};

export default MyGardenCreate;
