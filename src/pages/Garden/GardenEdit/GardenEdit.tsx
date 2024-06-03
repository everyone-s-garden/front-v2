import {
  Box,
  Center,
  Flex,
  List,
  ListItem,
  Text,
  Textarea,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useEffect, useRef } from 'react';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useWatch,
} from 'react-hook-form';
import { NumericFormat, PatternFormat } from 'react-number-format';
import { useNavigate } from 'react-router-dom';
import { BlockerModal, Content, DatePicker } from '@/components';
import FlexInput from '../components/FlexInput';
import FormButton from '../components/FormButton';
import Input from '../components/Input';
import MobileHeader from '../components/MobileHeader';
import SearchBar from '../components/SearchBar';
import SubmitButton from '../components/SubmitButton';
import { Garden, useGardenForm } from './schema';
import ImageSelector from '@/components/ImageSelector/ImageSelector';
import { PATH } from '@/routes/constants';
import { useCreateGarden } from '@/services/garden/query';
import { useGetLocation } from '@/services/region/query';
import { useImageStore } from '@/stores/imageStore';
import useSearchStore from '@/stores/searchStore';

const GardenEdit = () => {
  const methods = useGardenForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    clearErrors,
    setError,
  } = methods;

  const numberRef = useRef({
    price: '',
    size: '',
    contact: '',
  });

  const searchValue = useSearchStore((state) => state.searchValue);
  const showResults = useSearchStore((state) => state.showResults);
  const images = useImageStore((state) => state.images);
  const resetImages = useImageStore((state) => state.resetImages);

  const { data: results } = useGetLocation(searchValue);
  const { mutate: createGarden } = useCreateGarden();

  const navigate = useNavigate();

  const gardenState = useWatch({ control, name: 'gardenStatus' });
  const recruitStartDate = useWatch({ control, name: 'recruitStartDate' });
  const recruitEndDate = useWatch({ control, name: 'recruitEndDate' });
  const isToilet = useWatch({ control, name: 'isToilet' });
  const isWaterway = useWatch({ control, name: 'isWaterway' });
  const isEquipment = useWatch({ control, name: 'isEquipment' });
  useWatch({ control, name: 'price' });
  useWatch({ control, name: 'size' });
  useWatch({ control, name: 'contact' });

  const validateRecruitStartDate = (date: string) => {
    if (recruitEndDate) {
      return (
        dayjs(date).isSame(dayjs(recruitEndDate)) ||
        dayjs(date).isBefore(dayjs(recruitEndDate))
      );
    }

    return true;
  };

  const validateRecruitEndDate = (date: string) => {
    if (recruitStartDate) {
      return (
        dayjs(date).isSame(dayjs(recruitStartDate)) ||
        dayjs(date).isAfter(dayjs(recruitStartDate))
      );
    }

    return true;
  };

  const onSubmit: SubmitHandler<Garden> = (data) => {
    console.log(numberRef.current);
    const formData = new FormData();

    /** 분양 텃밭 form blob */
    const jsonBlob = new Blob(
      [
        JSON.stringify({
          ...data,
          price: numberRef.current.price,
          size: numberRef.current.size,
          contact: numberRef.current.contact,
        }),
      ],
      {
        type: 'application/json',
      },
    );

    images.forEach(({ file }) => {
      formData.append('gardenImages', file);
    });
    formData.append('gardenCreateRequest', jsonBlob);

    createGarden(formData, {
      onSuccess() {
        // TODO: 분양 텃밭 등록 성공 시 처리
        methods.reset();
        setTimeout(() => navigate(PATH.MAP.MAIN));
      },
      onError() {
        alert('분양 텃밭 등록에 실패했습니다.');
      },
    });
  };

  useEffect(() => {
    return () => {
      resetImages();
    };
  }, [resetImages]);

  return (
    <>
      <MobileHeader name="분양 텃밭 등록하기" />
      <Content heightWithoutContent={113}>
        <FormProvider {...methods}>
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

            <Flex
              flexDir={'column'}
              mb={{ mobile: '20px', tablet: '80px' }}
              gap={{ mobile: '28px', tablet: '34px' }}
            >
              <Input
                placeholder={'텃밭 이름'}
                errorMessage={errors.gardenName?.message}
                {...register('gardenName')}
              />
              <Controller
                control={control}
                render={({ field }) => (
                  <NumericFormat
                    customInput={Input}
                    placeholder={'가격'}
                    thousandSeparator=","
                    suffix={' 원'}
                    errorMessage={errors.price?.message}
                    {...field}
                    onValueChange={(values) => {
                      const { value } = values;
                      numberRef.current.price = value;
                    }}
                  />
                )}
                name="price"
              />
              <Controller
                control={control}
                render={({ field }) => (
                  <NumericFormat
                    customInput={Input}
                    placeholder={'면적(평)'}
                    thousandSeparator=","
                    suffix={' 평'}
                    errorMessage={errors.price?.message}
                    {...field}
                    onValueChange={(values) => {
                      const { value } = values;
                      numberRef.current.size = value;
                    }}
                  />
                )}
                name="size"
              />
              <Controller
                control={control}
                render={({ field }) => (
                  <PatternFormat
                    customInput={Input}
                    placeholder={'연락처'}
                    format="###-####-####"
                    errorMessage={errors.contact?.message}
                    {...field}
                    onValueChange={(values) => {
                      const { value } = values;
                      numberRef.current.contact = value;
                    }}
                  />
                )}
                name="contact"
              />

              <FlexInput
                label="모집 기간"
                gap={{ mobile: '18px', tablet: '40px' }}
                errorMessage={
                  errors.recruitStartDate?.message ||
                  errors.recruitEndDate?.message
                }
                errorTop={{ mobile: '72px', tablet: '60px' }}
              >
                <DatePicker
                  onChange={(date: string) => {
                    setValue('recruitStartDate', date);

                    if (!validateRecruitStartDate(date)) {
                      alert('모집 시작일은 모집 종료일보다 빨라야 합니다.');
                      setError('recruitStartDate', {
                        type: 'manual',
                        message: '모집 시작일은 모집 종료일보다 빨라야 합니다.',
                      });

                      return;
                    }

                    clearErrors(['recruitStartDate', 'recruitEndDate']);
                  }}
                />
                <DatePicker
                  onChange={(date: string) => {
                    setValue('recruitEndDate', date);

                    if (!validateRecruitEndDate(date)) {
                      alert('모집 종료일은 모집 시작일보다 늦어야 합니다.');
                      setError('recruitEndDate', {
                        type: 'manual',
                        message: '모집 종료일은 모집 시작일보다 늦어야 합니다.',
                      });

                      return;
                    }

                    clearErrors(['recruitStartDate', 'recruitEndDate']);
                  }}
                  placeholder="사용 종료일"
                />
              </FlexInput>

              <FlexInput
                label="상태"
                gap={{ mobile: '12px', tablet: '' }}
                errorMessage={errors.gardenStatus?.message}
              >
                <FormButton
                  label="모집 중"
                  activeState={gardenState === 'ACTIVE'}
                  onClick={() => {
                    setValue('gardenStatus', 'ACTIVE');
                    clearErrors('gardenStatus');
                  }}
                />
                <FormButton
                  label="마감"
                  activeState={gardenState === 'INACTIVE'}
                  onClick={() => {
                    setValue('gardenStatus', 'INACTIVE');
                    clearErrors('gardenStatus');
                  }}
                />
              </FlexInput>

              <FlexInput
                label="위치"
                errorMessage={errors.address?.message}
                flexGrow={1}
              >
                <SearchBar
                  placeholder={'지역명을 입력해주세요.'}
                  fieldName="address"
                >
                  {results &&
                    results.locationSearchResponses.length > 0 &&
                    showResults && (
                      <List
                        borderRadius={10}
                        border={'1px solid'}
                        borderColor={'gray.200'}
                        maxH={{ mobile: '235px', tablet: '217px' }}
                        overflow={'auto'}
                      >
                        {results.locationSearchResponses.map(
                          ({ latitude, longitude, position }) => (
                            <ListItem
                              key={position}
                              p={'13px 15px'}
                              fontSize={'14px'}
                              fontWeight={'medium'}
                              borderBottom={'1px solid'}
                              borderRight={'1px solid'}
                              borderColor={'gray.100'}
                              _first={{ borderTopRadius: '10px' }}
                              _last={{
                                borderBottom: 'none',
                                borderBottomRadius: '10px',
                              }}
                              _hover={{ bg: 'green.100' }}
                              cursor={'pointer'}
                              onMouseDown={() => {
                                setValue('address', position);
                                setValue('latitude', latitude);
                                setValue('longitude', longitude);
                                clearErrors('address');
                              }}
                              onTouchStart={() => {
                                setValue('address', position);
                                setValue('latitude', latitude);
                                setValue('longitude', longitude);
                                clearErrors('address');
                              }}
                            >
                              {position}
                            </ListItem>
                          ),
                        )}
                      </List>
                    )}
                </SearchBar>
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

              <Box pos={'relative'}>
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
                {errors.gardenDescription && (
                  <Text
                    pos={'absolute'}
                    color={'error'}
                    fontSize={'14px'}
                    fontWeight={'medium'}
                    top={'170px'}
                  >
                    {errors.gardenDescription.message}
                  </Text>
                )}
              </Box>
            </Flex>

            <SubmitButton />
          </Box>
        </FormProvider>
      </Content>

      <BlockerModal
        color="green"
        blockState={Object.values(methods.getValues()).some((value) => value)}
      />
    </>
  );
};

export default GardenEdit;
