import { zodResolver } from '@hookform/resolvers/zod';
import { EditorState } from 'draft-js';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import isEditorEmpty from './utils/isEditorEmpty';

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
  content: z.custom<EditorState>(
    (value) => !isEditorEmpty(value as EditorState),
    content,
  ),
});

type Post = z.infer<typeof FormSchema>;

const usePostForm = () => {
  return useForm<Post>({
    resolver: zodResolver(FormSchema),
    mode: 'onChange',
    defaultValues: {
      postType: undefined,
      title: '',
      content: EditorState.createEmpty(),
    },
  });
};

export { usePostForm, type Post };
