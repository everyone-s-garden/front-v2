import { FormControl, Button, Text, Box } from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import MapReportCategory from './MapReportCategory';
import MapReportContents from './MapReportContents';
import MapReportNotice from './MapReportNotice';
import { categoryArr, categorySubmitArr } from './categoryArr';
import reportAPI from '@/services/report/api';

interface MapReportFormProps {
  id: string | undefined;
}

const MapReportForm = ({ id }: MapReportFormProps) => {
  const {
    handleSubmit,
    register,
    control,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm<MapReportValues>({
    defaultValues: {
      content: '',
      category: categoryArr[0],
    },
  });

  const category = watch('category');
  const content = watch('content');

  const transformCategoryToSubmitFormat = (userCategory: string) => {
    const index = categoryArr.indexOf(userCategory);

    return categorySubmitArr[index - 1];
  };

  const onSubmit = async (values: MapReportValues) => {
    if (!values.category) return;
    const transformedCategory = transformCategoryToSubmitFormat(
      values.category,
    );
    const submissionValues = {
      content: values.content,
      reportType: transformedCategory,
    };

    try {
      const res = await reportAPI.mapReport(id, submissionValues);
      if (res.status === 201) {
        alert('신고가 완료되었습니다.');
        reset({
          content: '',
          category: categoryArr[0],
        });
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        alert('동일한 텃밭에 대해서는 신고가 한번만 가능합니다.');
      }
    }
  };

  const buttonDisabled = category === categoryArr[0] || !content;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl
        w={{ mobile: '', tablet: '606px' }}
        mx={{ mobile: '20px', tablet: 'none' }}
        display="flex"
        flexDir="column"
        gap="30px"
        mb="100px"
        mt={{ mobile: '24px', tablet: '' }}
      >
        <Text
          fontSize="18px"
          mb={{ mobile: '-4px', tablet: '' }}
          fontWeight="semibold"
        >
          내 주변 분양 신고
        </Text>
        <Controller
          control={control}
          name="category"
          render={({ field }) => <MapReportCategory {...field} />}
        />
        <MapReportContents register={register} />
        <MapReportNotice />
      </FormControl>

      <Box
        w="full"
        pos={{ mobile: 'absolute', tablet: 'static' }}
        bottom={{ mobile: '0', tablet: '' }}
        display="flex"
        justifyContent="center"
        mb={{ mobile: '', tablet: '166px' }}
      >
        <Button
          w={{ mobile: 'full', tablet: 'fit-content' }}
          isDisabled={buttonDisabled}
          isLoading={isSubmitting}
          type="submit"
          _hover={{}}
          _active={{}}
          textColor="white"
          p={{ mobile: '21px', tablet: '19px 144px' }}
          bgColor="green.500"
          borderRadius={{ mobile: '', tablet: '10px' }}
          opacity={buttonDisabled ? '0.3' : '1'}
          fontWeight="semiBold"
        >
          신고하기
        </Button>
      </Box>
    </form>
  );
};

export default MapReportForm;
