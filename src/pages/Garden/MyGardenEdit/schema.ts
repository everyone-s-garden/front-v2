import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  gardenId: z.number({ required_error: '필수 입력 항목입니다.' }),
  gardenName: z.string().min(1, '필수 입력 항목입니다.'),
  address: z.string().min(1, '필수 입력 항목입니다.'),
  useStartDate: z.string().min(1, '필수 입력 항목입니다.'),
  useEndDate: z.string().min(1, '필수 입력 항목입니다.'),
  description: z.string().min(10, '10글자 이상 입력해주세요.'),
});

type MyGarden = z.infer<typeof FormSchema>;

const useMyGardenForm = () => {
  return useForm<MyGarden>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      gardenId: undefined,
      gardenName: '',
      address: '',
      useStartDate: '',
      useEndDate: '',
      description: '',
    },
  });
};

export { useMyGardenForm, type MyGarden };
