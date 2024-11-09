import {
  Box,
  Center,
  Flex,
  Text,
  Textarea,
  List,
  ListItem,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { FormProvider, SubmitHandler } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { BlockerModal, Content, DatePicker, ImageSelector } from '@/components';
import FlexInput from '../components/FlexInput';
import MobileHeader from '../components/MobileHeader';
import SearchBar from '../components/SearchBar';
import SubmitButton from '../components/SubmitButton';
import { MyGarden, useMyGardenForm } from './schema';
import {
  useCreateMyGarden,
  useGetGardenByName,
  useUpdateMyGarden,
} from '@/services/garden/query';
import { useImageStore } from '@/stores/imageStore';
import useSearchStore from '@/stores/searchStore';
import { PATH } from '@/routes/constants';

const MyGardenCreate = () => {
  const methods = useMyGardenForm();
  const { state } = useLocation();

  const {
    formState: { errors },
    register,
    handleSubmit,
    clearErrors,
    setValue,
  } = methods;

  const searchValue = useSearchStore((state) => state.searchValue);

  const showResults = useSearchStore((state) => state.showResults);
  const images = useImageStore((state) => state.images);
  const resetImages = useImageStore((state) => state.resetImages);

  const { data: results } = useGetGardenByName(searchValue);
  const { mutate: createMyGarden } = useCreateMyGarden();
  const { mutate: updateMyGarden } = useUpdateMyGarden();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<MyGarden> = (data) => {
    const formData = new FormData();

    /** 분양 텃밭 form blob */
    const jsonBlob = new Blob([JSON.stringify({ ...data })], {
      type: 'application/json',
    });

    images.forEach((image) => {
      console.log(image);
      if (typeof image !== 'string') {
        formData.append('gardenImage', image.file);
      } else {
        formData.append(
          'gardenImage',
          new Blob([''], { type: 'application/octet-stream' }),
        );
      }
    });

    if (state?.info) {
      formData.append('myManagedGardenUpdateRequest', jsonBlob);
      updateMyGarden(
        { formData, gardenId: state.info.myManagedGardenId },
        {
          onSuccess() {
            methods.reset();
            setTimeout(() =>
              navigate(PATH.MYPAGE.NEARBY_GARDENS_INFO.GARDEN_DIARY),
            );
          },
          onError() {
            alert('나의 텃밭 수정에 실패했습니다.');
          },
        },
      );
    } else {
      formData.append('myManagedGardenCreateRequest', jsonBlob);
      createMyGarden(formData, {
        onSuccess() {
          // TODO: 나의 텃밭 등록 성공 시 처리
          methods.reset();
          setTimeout(() =>
            navigate(PATH.MYPAGE.NEARBY_GARDENS_INFO.GARDEN_DIARY),
          );
        },
        onError() {
          alert('나의 텃밭 등록에 실패했습니다.');
        },
      });
    }
  };

  useEffect(() => {
    return () => {
      resetImages();
    };
  }, [resetImages]);

  useEffect(() => {
    if (state?.info) {
      setValue('myManagedGardenName', state.info.myManagedGardenName);
      setValue('createdAt', state.info.createdAt);
      setValue('description', state.info.description);
    }
  }, [state]);

  return (
    <>
      <MobileHeader name="텃밭 일기 작성하기" />
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
                텃밭 일기 작성하기
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
                initialImages={state?.info.images}
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
                // maxImageLength={1}
              />
            </Box>

            <Flex
              flexDir={'column'}
              mb={{ mobile: '20px', tablet: '80px' }}
              gap={{ mobile: '28px', tablet: '34px' }}
            >
              <FlexInput
                label="텃밭 정보"
                errorMessage={errors.myManagedGardenName?.message}
                flexGrow={1}
              >
                <SearchBar
                  placeholder={'텃밭명을 입력해주세요.'}
                  fieldName="myManagedGardenName"
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
                          ({ gardenId, gardenName }) => (
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
                                setValue('myManagedGardenName', gardenName);
                                clearErrors(['myManagedGardenName']);
                              }}
                              onTouchStart={() => {
                                setValue('myManagedGardenName', gardenName);
                                clearErrors(['myManagedGardenName']);
                              }}
                            >
                              {gardenName}
                            </ListItem>
                          ),
                        )}
                      </List>
                    )}
                  {searchValue !== '' &&
                    results &&
                    results.gardenSearchResponses.length === 0 &&
                    showResults && (
                      <Box
                        borderRadius={10}
                        border={'1px solid'}
                        borderColor={'gray.200'}
                        h={'90px'}
                        lineHeight={'16.71px'}
                        overflow={'auto'}
                        fontSize={'14px'}
                        color={'gray.400'}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                        flexDirection={'column'}
                      >
                        <Text>검색 결과가 없습니다.</Text>
                        <Text>정확한 검색어를 입력해주세요.</Text>
                      </Box>
                    )}
                </SearchBar>
              </FlexInput>

              <FlexInput
                label="작성 날짜"
                gap={{ mobile: '18px', tablet: '40px' }}
                errorMessage={errors.createdAt?.message}
                errorTop={{ mobile: '72px', tablet: '60px' }}
              >
                <DatePicker
                  initialDate={state?.info?.createdAt}
                  placeholder="작성 날짜"
                  onChange={(date: string) => {
                    setValue('createdAt', date);
                    clearErrors(['createdAt']);
                  }}
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
