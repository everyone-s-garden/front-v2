import { Box, Center, Flex, Text, Textarea } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useWatch,
} from 'react-hook-form';
import { NumericFormat, PatternFormat } from 'react-number-format';
import { useNavigate } from 'react-router-dom';
import { BlockerModal, Content, DatePicker } from '@/components';
import AddressSearchBar from '../components/AddressSearchBar';
import FlexInput from '../components/FlexInput';
import FormButton from '../components/FormButton';
import Input from '../components/Input';
import MobileHeader from '../components/MobileHeader';
import SubmitButton from '../components/SubmitButton';
import { Garden, useGardenForm } from './schema';
import ImageSelector from '@/components/ImageSelector/ImageSelector';
import { PATH } from '@/routes/constants';
import { useCreateGarden } from '@/services/garden/query';
import { useImageStore } from '@/stores/imageStore';
import removeNumberFormmating from '@/utils/removeNumberFormatting';

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

  const images = useImageStore((state) => state.images);
  const resetImages = useImageStore((state) => state.resetImages);
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
    const formData = new FormData();

    /** 분양 텃밭 form blob */
    const jsonBlob = new Blob(
      [
        JSON.stringify({
          ...data,
          price: removeNumberFormmating(data.price),
          size: removeNumberFormmating(data.size),
          contact: removeNumberFormmating(data.contact),
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
                render={({
                  field: { name, onBlur, onChange, value, disabled },
                }) => (
                  <NumericFormat
                    customInput={Input}
                    placeholder={'가격'}
                    thousandSeparator=","
                    suffix={' 원'}
                    errorMessage={errors.price?.message}
                    name={name}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    disabled={disabled}
                  />
                )}
                name="price"
              />
              <Controller
                control={control}
                render={({
                  field: { name, onBlur, onChange, value, disabled },
                }) => (
                  <NumericFormat
                    customInput={Input}
                    placeholder={'면적(평)'}
                    thousandSeparator=","
                    suffix={' 평'}
                    errorMessage={errors.size?.message}
                    name={name}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    disabled={disabled}
                  />
                )}
                name="size"
              />
              <Controller
                control={control}
                render={({
                  field: { name, onBlur, onChange, value, disabled },
                }) => (
                  <PatternFormat
                    customInput={Input}
                    placeholder={'연락처'}
                    format="###-####-####"
                    errorMessage={errors.contact?.message}
                    name={name}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    disabled={disabled}
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
                <AddressSearchBar />
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
