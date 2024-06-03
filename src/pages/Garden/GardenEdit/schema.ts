import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const phoneRegex = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/);

const FormSchema = z.object({
  gardenName: z.string().min(1, '필수 입력 항목입니다.'),
  price: z.string({ required_error: '필수 입력 항목입니다.' }),
  size: z.string({ required_error: '필수 입력 항목입니다.' }),
  contact: z
    .string({ required_error: '필수 입력 항목입니다.' })
    .regex(phoneRegex, '올바른 전화번호를 입력해주세요.'),
  recruitStartDate: z.string().min(1, '필수 입력 항목입니다.'),
  recruitEndDate: z.string().min(1, '필수 입력 항목입니다.'),
  gardenStatus: z.enum(['ACTIVE', 'INACTIVE'], {
    required_error: '필수 선택 항목입니다.',
  }),
  address: z.string().min(1, '필수 입력 항목입니다.'),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  isToilet: z.boolean(),
  isWaterway: z.boolean(),
  isEquipment: z.boolean(),
  gardenDescription: z.string().min(10, '10글자 이상 입력해주세요.'),
});

type Garden = z.infer<typeof FormSchema>;

const useGardenForm = () => {
  return useForm<Garden>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      gardenName: '',
      price: undefined,
      size: undefined,
      contact: undefined,
      recruitStartDate: '',
      recruitEndDate: '',
      gardenStatus: undefined,
      address: '',
      latitude: undefined,
      longitude: undefined,
      isToilet: false,
      isWaterway: false,
      isEquipment: false,
      gardenDescription: '',
    },
  });
};

export { useGardenForm, type Garden };
