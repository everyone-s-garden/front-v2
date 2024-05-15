import { Box, Center, Flex, Text, Textarea } from '@chakra-ui/react';
import { SubmitHandler, useWatch } from 'react-hook-form';
import { Content, DatePicker } from '@/components';
import FlexInput from '../components/FlexInput';
import FormButton from '../components/FormButton';
import Input from '../components/Input';
import MobileHeader from '../components/MobileHeader';
import SearchBar from '../components/SearchBar';
import SubmitButton from '../components/SubmitButton';
import { Garden, useGardenForm } from './schema';
import ImageSelector from '@/components/ImageSelector/ImageSelector';

const GardenEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useGardenForm();

  const onSubmit: SubmitHandler<Garden> = (data) => {
    console.log(data);
  };

  const gardenState = useWatch({ control, name: 'gardenStatus' });
  const isToilet = useWatch({ control, name: 'isToilet' });
  const isWaterway = useWatch({ control, name: 'isWaterway' });
  const isEquipment = useWatch({ control, name: 'isEquipment' });

  return (
    <>
      <MobileHeader />
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
              분양 텃밭 등록하기
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
            <Input
              placeholder={'텃밭 이름'}
              errorMessage={errors.gardenName?.message}
              {...register('gardenName')}
            />
            <Input
              placeholder={'가격'}
              type="number"
              errorMessage={errors.price?.message}
              {...register('price')}
            />
            <Input
              placeholder={'면적(평)'}
              type="number"
              errorMessage={errors.size?.message}
              {...register('size')}
            />
            <Input
              placeholder={'연락처'}
              type="tel"
              errorMessage={errors.contact?.message}
              {...register('contact')}
            />

            <FlexInput
              label="모집 기간"
              gap={{ mobile: '18px', tablet: '40px' }}
              errorMessage={
                errors.recruitStartDate || errors.recruitEndDate
                  ? '필수 선택 항목입니다.'
                  : ''
              }
              errorTop={72}
            >
              <DatePicker onChange={() => {}} />
              <DatePicker onChange={() => {}} placeholder="사용 종료일" />
            </FlexInput>

            <FlexInput
              label="상태"
              gap={{ mobile: '12px', tablet: '' }}
              errorMessage={errors.gardenStatus?.message}
            >
              <FormButton
                label="모집 중"
                activeState={gardenState === 'ACTIVE'}
                onClick={() => setValue('gardenStatus', 'ACTIVE')}
              />
              <FormButton
                label="마감"
                activeState={gardenState === 'INACTIVE'}
                onClick={() => setValue('gardenStatus', 'INACTIVE')}
              />
            </FlexInput>

            <FlexInput
              label="위치"
              errorMessage={errors.address?.message}
              flexGrow={1}
            >
              <SearchBar placeholder={'지역명을 입력해주세요.'} />
            </FlexInput>

            <FlexInput label="시설" gap={{ mobile: '12px', tablet: '' }}>
              <FormButton
                label="화장실"
                activeState={isToilet}
                onClick={() => setValue('isToilet', !isToilet)}
              />
              <FormButton
                label="수로실"
                activeState={isWaterway}
                onClick={() => setValue('isWaterway', !isWaterway)}
              />
              <FormButton
                label="농기구"
                activeState={isEquipment}
                onClick={() => setValue('isEquipment', !isEquipment)}
              />
            </FlexInput>

            <Textarea
              placeholder={'기간, 주의사항 등 상세 내용을 입력해주세요.'}
              _placeholder={{ color: 'gray.300' }}
              fontWeight={'medium'}
              resize={'none'}
              h={'160px'}
              variant={'unstyled'}
              borderRadius={'10px'}
              border={'1px solid'}
              borderColor={'gray.100'}
              p={'20px'}
              {...register('gardenDescription')}
            />
          </Flex>

          <SubmitButton />
        </Box>
      </Content>
    </>
  );
};

export default GardenEdit;
