import {
  Box,
  Center,
  Flex,
  Text,
  Textarea,
  Input as ChakraInput,
  List,
  ListItem,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { FormProvider, SubmitHandler, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { BlockerModal, Content, DatePicker, ImageSelector } from '@/components';
import FlexInput from '../components/FlexInput';
import MobileHeader from '../components/MobileHeader';
import SearchBar from '../components/SearchBar';
import SubmitButton from '../components/SubmitButton';
import { MyGarden, useMyGardenForm } from './schema';
import { PATH } from '@/routes/constants';
import { useCreateMyGarden, useGetGardenByName } from '@/services/garden/query';
import { useImageStore } from '@/stores/imageStore';
import useSearchStore from '@/stores/searchStore';

const MyGardenCreate = () => {
  const methods = useMyGardenForm();
  const {
    formState: { errors },
    control,
    register,
    handleSubmit,
    clearErrors,
    setError,
    setValue,
  } = methods;

  const searchValue = useSearchStore((state) => state.searchValue);
  const showResults = useSearchStore((state) => state.showResults);
  const images = useImageStore((state) => state.images);
  const resetImages = useImageStore((state) => state.resetImages);

  const { data: results } = useGetGardenByName(searchValue);
  const { mutate: createMyGarden } = useCreateMyGarden();

  const navigate = useNavigate();

  const useStartDate = useWatch({ control, name: 'useEndDate' });
  const useEndDate = useWatch({ control, name: 'useEndDate' });

  const validateRecruitStartDate = (date: string) => {
    if (useEndDate) {
      return (
        dayjs(date).isSame(dayjs(useEndDate)) ||
        dayjs(date).isBefore(dayjs(useEndDate))
      );
    }

    return true;
  };

  const validateRecruitEndDate = (date: string) => {
    if (useStartDate) {
      return (
        dayjs(date).isSame(dayjs(useStartDate)) ||
        dayjs(date).isAfter(dayjs(useStartDate))
      );
    }

    return true;
  };

  const onSubmit: SubmitHandler<MyGarden> = (data) => {
    const formData = new FormData();

    /** 분양 텃밭 form blob */
    const jsonBlob = new Blob(
      [
        JSON.stringify({
          gardenId: data.gardenId,
          useStartDate: data.useStartDate,
          useEndDate: data.useEndDate,
          description: data.description,
        }),
      ],
      {
        type: 'application/json',
      },
    );

    images.forEach(({ file }) => {
      formData.append('gardenImage', file);
    });
    formData.append('myManagedGardenCreateRequest', jsonBlob);

    createMyGarden(formData, {
      onSuccess() {
        // TODO: 나의 텃밭 등록 성공 시 처리
        methods.reset();
        setTimeout(() => navigate(PATH.MAP.MAIN));
      },
      onError() {
        alert('나의 텃밭 등록에 실패했습니다.');
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
      <MobileHeader name="나의 텃밭 등록하기" />
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
              <FlexInput
                label="텃밭 정보"
                errorMessage={errors.gardenName?.message}
                flexGrow={1}
              >
                <SearchBar
                  placeholder={'텃밭명을 입력해주세요.'}
                  fieldName="gardenName"
                >
                  {results &&
                    results.gardenSearchResponses.length > 0 &&
                    showResults && (
                      <List
                        borderRadius={10}
                        border={'1px solid'}
                        borderColor={'gray.200'}
                        maxH={{ mobile: '235px', tablet: '217px' }}
                        overflow={'auto'}
                      >
                        {results.gardenSearchResponses.map(
                          ({ address, gardenId, gardenName }) => (
                            <ListItem
                              key={gardenId}
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
                                setValue('gardenId', gardenId);
                                setValue('gardenName', gardenName);
                                setValue('address', address);
                                clearErrors([
                                  'gardenId',
                                  'gardenName',
                                  'address',
                                ]);
                              }}
                              onTouchStart={() => {
                                setValue('gardenId', gardenId);
                                setValue('gardenName', gardenName);
                                setValue('address', address);
                                clearErrors([
                                  'gardenId',
                                  'gardenName',
                                  'address',
                                ]);
                              }}
                            >
                              {gardenName}
                            </ListItem>
                          ),
                        )}
                      </List>
                    )}
                </SearchBar>
              </FlexInput>

              <FlexInput
                label="위치"
                errorMessage={errors.address?.message}
                flexGrow={1}
                divider={true}
              >
                <ChakraInput
                  variant={'unstyled'}
                  borderRadius={0}
                  fontWeight={'medium'}
                  placeholder="검색해서 등록 시 자동으로 불러와져요"
                  _placeholder={{ color: 'gray.300' }}
                  disabled
                  _disabled={{ cursor: 'default' }}
                  {...register('address')}
                />
              </FlexInput>

              <FlexInput
                label="기간"
                gap={{ mobile: '18px', tablet: '40px' }}
                errorMessage={
                  errors.useStartDate?.message || errors.useEndDate?.message
                }
                errorTop={{ mobile: '72px', tablet: '60px' }}
              >
                <DatePicker
                  onChange={(date: string) => {
                    setValue('useStartDate', date);

                    if (!validateRecruitStartDate(date)) {
                      alert('사용 시작일은 사용 종료일보다 이전이어야 합니다.');
                      setError('useStartDate', {
                        type: 'manual',
                        message:
                          '사용 시작일은 사용 종료일보다 이전이어야 합니다.',
                      });

                      return;
                    }

                    clearErrors(['useStartDate', 'useEndDate']);
                  }}
                />
                <DatePicker
                  onChange={(date: string) => {
                    setValue('useEndDate', date);

                    if (!validateRecruitEndDate(date)) {
                      alert('사용 종료일은 사용 시작일보다 이후이어야 합니다.');
                      setError('useEndDate', {
                        type: 'manual',
                        message:
                          '사용 종료일은 사용 시작일보다 이후이어야 합니다.',
                      });

                      return;
                    }

                    clearErrors(['useStartDate', 'useEndDate']);
                  }}
                  placeholder="사용 종료일"
                />
              </FlexInput>

              <Box pos={'relative'}>
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
                {errors.description && (
                  <Text
                    pos={'absolute'}
                    color={'error'}
                    fontSize={'14px'}
                    fontWeight={'medium'}
                    top={'170px'}
                  >
                    {errors.description.message}
                  </Text>
                )}
              </Box>
            </Flex>

            <SubmitButton />
          </Box>
        </FormProvider>
      </Content>

      <BlockerModal
        blockState={Object.values(methods.getValues()).some((value) => value)}
      />
    </>
  );
};

export default MyGardenCreate;
