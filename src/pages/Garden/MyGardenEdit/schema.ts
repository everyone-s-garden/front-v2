import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  myManagedGardenName: z.string().min(1, '필수 입력 항목입니다.'),
  createdAt: z.string().min(1, '필수 입력 항목입니다.'),
  description: z.string().min(10, '10글자 이상 입력해주세요.'),
});

type MyGarden = z.infer<typeof FormSchema>;

const useMyGardenForm = () => {
  return useForm<MyGarden>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      myManagedGardenName: '',
      createdAt: '',
      description: '',
    },
  });
};

export { useMyGardenForm, type MyGarden };
