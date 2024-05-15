import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  gardenId: z.number({ required_error: '필수 입력 항목입니다.' }),
  useStartDate: z.string().min(1, '필수 입력 항목입니다.'),
  useEndDate: z.string().min(1, '필수 입력 항목입니다.'),
  description: z.string(),
});

type MyGarden = z.infer<typeof FormSchema>;

const useMyGardenForm = () => {
  return useForm<MyGarden>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      gardenId: undefined,
      useStartDate: '',
      useEndDate: '',
      description: '',
    },
  });
};

export { useMyGardenForm, type MyGarden };
