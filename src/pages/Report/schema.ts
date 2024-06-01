import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formMessage = {
  reportType: {
    required_error: '상세 유형을 선택해주세요.',
  },
  content: {
    required_error: '필수 입력 항목입니다.',
    min: { value: 10, message: '10자 이상 입력해주세요.' },
  },
};

const { reportType, content } = formMessage;

const FormSchema = z.object({
  reportType: z.string({ required_error: reportType.required_error }),
  content: z
    .string({ required_error: content.required_error })
    .min(content.min.value, content.min.message),
});

type Report = z.infer<typeof FormSchema>;

// TODO: 수정 페이지 구현 시 기본값 변경
const useReportForm = () => {
  return useForm<Report>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      reportType: undefined,
      content: undefined,
    },
  });
};

export { useReportForm, type Report };
