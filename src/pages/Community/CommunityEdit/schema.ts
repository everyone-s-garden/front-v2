import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formMessage = {
  type: {
    required_error: '게시글 타입을 선택해주세요.',
  },
  title: {
    min: {
      value: 1,
      message: '필수 입력 항목입니다.',
    },
  },
  content: { message: '필수 입력 항목입니다.' },
};

const { type, title, content } = formMessage;

const FormSchema = z.object({
  postType: z.enum(['정보 공유', '텃밭 자랑', '질문하기', '기타'], type),
  title: z.string().min(title.min.value, title.min.message),
  content: z
    .string({ required_error: content.message })
    .min(1, content.message),
});

type Post = z.infer<typeof FormSchema>;

// TODO: 수정 페이지 구현 시 기본값 변경
const usePostForm = () => {
  return useForm<Post>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      postType: undefined,
      title: '',
      content: '',
    },
  });
};

export { usePostForm, type Post };
