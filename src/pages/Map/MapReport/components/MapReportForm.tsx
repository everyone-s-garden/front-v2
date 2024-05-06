import { FormControl, Button, Text, Box } from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import MapReportCategory from './MapReportCategory';
import MapReportContents from './MapReportContents';
import MapReportNotice from './MapReportNotice';

export interface FormValues {
  content: string;
  category: string;
}

const MapReportForm = () => {
  const categoryArr: string[] = [
    '상세 유형을 선택해주세요.',
    '주제와 맞지 않음',
    '정보가 부정확함',
    '지나친 광고성 게시물',
    '도배 및 중복 게시물',
    '욕설 / 비방이 심함',
    '외설적인 게시물',
    '개인정보 노출',
    '기타',
  ];

  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      content: '',
      category: categoryArr[0],
    },
  });

  const category = watch('category');
  const content = watch('content');

  const onSubmit = (values: FormValues) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  };

  const buttonDisabled = category === categoryArr[0] || !content;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        w="606px"
        display="flex"
        flexDir="column"
        gap="30px"
        mb="100px"
      >
        <Text fontSize="18px" fontWeight="semibold">
          내 주변 분양 신고
        </Text>
        <Controller
          control={control}
          name="category"
          render={({ field }) => (
            <MapReportCategory {...field} categoryArr={categoryArr} />
          )}
        />
        <MapReportContents register={register} />
        <MapReportNotice />
      </FormControl>

      <Box display="flex" justifyContent="center" mb="166px">
        <Button
          isDisabled={buttonDisabled}
          isLoading={isSubmitting}
          type="submit"
          _hover={{}}
          _active={{}}
          textColor="white"
          p="19px 144px"
          bgColor="green.500"
          borderRadius="10px"
          opacity={buttonDisabled ? '0.3' : '1'}
        >
          신고하기
        </Button>
      </Box>
    </form>
  );
};

export default MapReportForm;
