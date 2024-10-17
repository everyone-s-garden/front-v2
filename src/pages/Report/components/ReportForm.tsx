import { Box, Button, FormControl, Text } from '@chakra-ui/react';
import { FormProvider, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ERROR, REPORT_DATA } from '../constants';
import { Report, useReportForm } from '../schema';
import { ReportState } from '../types';
import ReportCategory from './ReportCategory';
import ReportContents from './ReportContents';
import ReportNotice from './ReportNotice';
import {
  useReportChat,
  useReportCommunityComment,
  useReportCommunityPost,
  useReportCrop,
  useReportGarden,
} from '@/services/report/mutation';
import { ApiError } from '@/types/error';

const ReportForm = ({ from, color, name, reportId, memberId }: ReportState) => {
  const methods = useReportForm();
  const navigate = useNavigate();

  const { mutate: reportGarden, isPending: isGardenPending } =
    useReportGarden();
  const { mutate: reportCrop, isPending: isCropPending } = useReportCrop();
  const { mutate: reportCommunityPost, isPending: isPostPending } =
    useReportCommunityPost();
  const { mutate: reportCommunityComment, isPending: isCropCommentPending } =
    useReportCommunityComment();
  const { mutate: reportChat, isPending: isChatPending } = useReportChat();

  const handleSuccess = () => {
    alert('신고가 접수되었습니다.');
    navigate(from);
  };

  const handleError = (error: Error) => {
    if ((error as unknown as ApiError).detail === ERROR.POST_ALREADY_REPORTED) {
      alert(ERROR.POST_ALREADY_REPORTED);

      return;
    }
    alert('신고 중 오류가 발생했습니다.');
  };

  const onSubmit: SubmitHandler<Report> = (values) => {
    switch (name) {
      case 'garden':
        reportGarden(
          { id: reportId, values },
          { onSuccess: handleSuccess, onError: handleError },
        );
        break;
      case 'crop':
        reportCrop(
          { id: reportId, values },
          { onSuccess: handleSuccess, onError: handleError },
        );
        break;
      case 'community_post':
        reportCommunityPost(
          { id: reportId, values },
          { onSuccess: handleSuccess, onError: handleError },
        );
        break;
      case 'community_comment':
        reportCommunityComment(
          { id: reportId, values },
          { onSuccess: handleSuccess, onError: handleError },
        );
        break;
      case 'chat':
        reportChat(
          {
            id: reportId,
            values: {
              reportContent: values.content,
              reportType: values.reportType,
              reportedMemberId: Number(memberId),
            },
          },
          { onSuccess: handleSuccess, onError: handleError },
        );
        break;
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
            {REPORT_DATA[name].name} 신고
          </Text>
          <ReportCategory
            color={color}
            name={name}
            categoryList={Object.keys(REPORT_DATA[name].report)}
          />
          <ReportContents />
          <ReportNotice />
        </FormControl>

        <Box display={{ mobile: 'block', tablet: 'flex' }}>
          <Button
            variant={'unstyled'}
            pos={{ mobile: 'fixed', tablet: 'static' }}
            bottom={0}
            w={{ mobile: '100%', tablet: '344px' }}
            h={{ mobile: '60px', tablet: '54px' }}
            m={{ mobile: 0, tablet: '0 auto 100px auto' }}
            borderRadius={{ mobile: '0', tablet: '10px' }}
            bg={`${color}.500`}
            fontWeight={'semiBold'}
            color={'white'}
            type="submit"
            isLoading={
              isGardenPending ||
              isCropPending ||
              isPostPending ||
              isCropCommentPending ||
              isChatPending
            }
            display={'flex'}
            colorScheme="green"
          >
            신고하기
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default ReportForm;
