import { FormControl, Button, Text, Box } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import MapReportCategory from './MapReportCategory';
import MapReportContents from './MapReportContents';
import MapReportNotice from './MapReportNotice';

interface FormValues {
  data: string;
}

const MapReportForm = () => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = (values: FormValues) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  };

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
        <MapReportCategory />
        <MapReportContents />
        <MapReportNotice />
      </FormControl>

      <Box display="flex" justifyContent="center" mb="166px">
        <Button
          isDisabled={true}
          isLoading={isSubmitting}
          type="submit"
          _hover={{}}
          _active={{}}
          textColor="white"
          p="19px 144px"
          bgColor="green.500"
          borderRadius="10px"
          opacity="0.3"
        >
          신고하기
        </Button>
      </Box>
    </form>
  );
};

export default MapReportForm;
